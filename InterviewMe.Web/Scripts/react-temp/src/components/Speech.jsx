import React, { Component } from 'react';
import * as SDK from 'microsoft-speech-browser-sdk';

RecognizerSetup = (SDK, recognitionMode, language, format, subscriptionKey) => {
    let recognizerConfig = new SDK.RecognizerConfig(
        new SDK.SpeechConfig(
            new SDK.Context(
                new SDK.OS(navigator.userAgent, "Browser", null),
                new SDK.Device("SpeechSample", "SpeechSample", "1.0.00000"))),
        recognitionMode, // SDK.RecognitionMode.Interactive  (Options - Interactive/Conversation/Dictation)
        language, // Supported languages are specific to each recognition mode Refer to docs.
        format); // SDK.SpeechResultFormat.Simple (Options - Simple/Detailed)

    // Alternatively use SDK.CognitiveTokenAuthentication(fetchCallback, fetchOnExpiryCallback) for token auth
    let authentication = new SDK.CognitiveSubscriptionKeyAuthentication(subscriptionKey);

    return SDK.Recognizer.Create(recognizerConfig, authentication);
}

RecognizerStart = (SDK, recognizer) => {
    recognizer.Recognize((event) => {
        /*
            Alternative syntax for typescript devs.
            if (event instanceof SDK.RecognitionTriggeredEvent)
        */
        switch (event.Name) {
            case "RecognitionTriggeredEvent":
                UpdateStatus("Initializing");
                break;
            case "ListeningStartedEvent":
                UpdateStatus("Listening");
                break;
            case "RecognitionStartedEvent":
                UpdateStatus("Listening_Recognizing");
                break;
            case "SpeechStartDetectedEvent":
                UpdateStatus("Listening_DetectedSpeech_Recognizing");
                console.log(JSON.stringify(event.Result)); // check console for other information in result
                break;
            case "SpeechHypothesisEvent":
                UpdateRecognizedHypothesis(event.Result.Text);
                console.log(JSON.stringify(event.Result)); // check console for other information in result
                break;
            case "SpeechFragmentEvent":
                UpdateRecognizedHypothesis(event.Result.Text);
                console.log(JSON.stringify(event.Result)); // check console for other information in result
                break;
            case "SpeechEndDetectedEvent":
                OnSpeechEndDetected();
                UpdateStatus("Processing_Adding_Final_Touches");
                console.log(JSON.stringify(event.Result)); // check console for other information in result
                break;
            case "SpeechSimplePhraseEvent":
                UpdateRecognizedPhrase(JSON.stringify(event.Result, null, 3));
                break;
            case "SpeechDetailedPhraseEvent":
                UpdateRecognizedPhrase(JSON.stringify(event.Result, null, 3));
                break;
            case "RecognitionEndedEvent":
                OnComplete();
                UpdateStatus("Idle");
                console.log(JSON.stringify(event)); // Debug information
                break;
        }
    })
        .On(() => {
            // The request succeeded. Nothing to do here.
        },
            (error) => {
                console.error(error);
            });
}

RecognizerStop = (SDK, recognizer) => {
    // recognizer.AudioSource.Detach(audioNodeId) can be also used here. (audioNodeId is part of ListeningStartedEvent)
    recognizer.AudioSource.TurnOff();
}

export default class SpeechRec extends Component {
    render() {
        return (
            <div id="content" style="display:none">
                <table width="100%">

                    <tr style="display:none">
                        <td align="right">Subscription</td>
                        <td><input id="key" type="text" size="40" value="486d780191184b088ee16d3f5e9395cd" /></td>
                    </tr>
                    <tr>
                        <td align="right">Language:</td>
                        <td align="left">
                            <select id="languageOptions">
                                <option value="ar-EG">Arabic - EG</option>
                                <option value="ca-ES">Catalan - ES</option>
                                <option value="da-DK">Danish - DK</option>
                                <option value="da-DK">Danish - DK</option>
                                <option value="de-DE">German - DE</option>
                                <option value="en-AU">English - AU</option>
                                <option value="en-CA">English - CA</option>
                                <option value="en-GB">English - GB</option>
                                <option value="en-IN">English - IN</option>
                                <option value="en-NZ">English - NZ</option>
                                <option value="zh-CN">Chinese - CN</option>
                                <option value="en-US" selected="selected">English - US</option>
                                <option value="es-ES">Spanish - ES</option>
                                <option value="es-MX">Spanish - MX</option>
                                <option value="fi-FI">Finnish - FI</option>
                                <option value="fr-CA">French - CA</option>
                                <option value="fr-FR">French - FR</option>
                                <option value="hi-IN">Hindi - IN</option>
                                <option value="it-IT">Italian - IT</option>
                                <option value="ja-JP">Japanese - JP</option>
                                <option value="ko-KR">Korean - KR</option>
                                <option value="nb-NO">Norwegian - NO</option>
                                <option value="nl-NL">Dutch - NL</option>
                                <option value="pl-PL">Polish - PL</option>
                                <option value="pt-BR">Portuguese - BR</option>
                                <option value="pt-PT">Portuguese - PT</option>
                                <option value="ru-RU">Russian - RU</option>
                                <option value="sv-SE">Swedish - SE</option>
                                <option value="zh-CN">Chinese - CN</option>
                                <option value="zh-HK">Chinese - HK</option>
                                <option value="zh-TW">Chinese - TW</option>
                            </select>
                        </td>
                    </tr>
                    <tr style="display:none">
                        <td align="right">Recognition Mode:</td>
                        <td align="left">
                            <select id="recognitionMode">
                                <option value="Interactive">Interactive</option>
                                <option value="Conversation">Conversation</option>
                                <option value="Dictation">Dictation</option>
                            </select>
                        </td>
                    </tr>
                    <tr style="display:none">
                        <td align="right">Format:</td>
                        <td align="left">
                            <select id="formatOptions">
                                <option value="Simple" >Simple Result</option>
                                <option selected="selected" value="Detailed">Detailed Result</option>
                            </select>
                        </td>
                    </tr>
                    <tr style="display:none">
                        <td align="right">Input:</td>
                        <td align="left">
                            <select id="inputSource">
                                <option value="Mic" selected="selected">Microphone</option>
                                <option value="File">Audio File</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button id="startBtn" disabled="disabled">Start</button>
                            <button id="stopBtn" disabled="disabled">Stop</button>
                            <input type="file" id="filePicker" accept=".wav" style="display:none" />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <table>
                                <tr>
                                    <td style="display:none">Results:</td>
                                    <td>Response:</td>
                                    <td align="right">Status:</td>
                                </tr>
                                <tr>
                                    <td style="display:none">
                                        <textarea id="phraseDiv" style="display: inline-block;width:500px;height:200px"></textarea>
                                    </td>
                                    <td style="vertical-align: top">
                                        <span id="hypothesisDiv" style="width:200px;height:200px;display:block;"></span>
                                    </td>
                                    <td align="left"><span id="statusDiv"></span></td>
                                </tr>

                            </table>
                        </td>
                    </tr>

                </table>
            </div>
        )
    }
}