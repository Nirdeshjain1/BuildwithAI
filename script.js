document.getElementById('translateButton').addEventListener('click', async () => {
    const text = document.getElementById('inputText').value;
    const targetLanguage = document.getElementById('languageSelect').value;

    // Call the translation API
    const translatedText = await translateText("en", targetLanguage, text);
    document.getElementById('outputText').innerText = translatedText;
});

// Function to call the translation API
async function translateText(source, target, text) {
    const apiKey = 'AIzaSyCmVuN_lD4nsizTjVrK6pks3FNr63Pp9lE'; // Replace with your actual API key
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: text,
            source: source,
            target: target,
            format: 'text'
        }),
    });

    const data = await response.json();
    return data.data.translations[0].translatedText; // Return the translated text
}