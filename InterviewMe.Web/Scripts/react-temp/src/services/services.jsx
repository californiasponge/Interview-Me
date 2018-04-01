import axios from 'axios';

export function getAll(){
    const url = 'api/users';

    return axios.get(url);
}

export function speech() {
    return axios({
        method: 'post',
        url: 'https://speech.platform.bing.com/speech/recognition/interactive/cognitiveservices/v1?language=en-US&format=detailed',
        headers: {
            "Accept": "application/json;text/xml",
            "Content-Type": "audio/wav; codec=audio/pcm; samplerate=16000",
            "Ocp-Apim-Subscription-Key": "486d780191184b088ee16d3f5e9395cd",
            "Host": "speech.platform.bing.com",
            "Transfer-Encoding": "chunked",
            "Expect": "100-continue"
        }
    })
}