require('dotenv').config(); // Load environment variables from .env file

const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY; // Access the API key

// Example function to use the API key (you would call the translation API here)
async function translateText(text, targetLanguage) {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: text,
            target: targetLanguage,
        }),
    });

    const data = await response.json();
    return data.data.translations[0].translatedText; // Return the translated text
}

// Example usage
translateText('Hello, world!', 'es').then(translation => {
    console.log(translation); // Should log "¡Hola, mundo!" if successful
}).catch(err => {
    console.error('Error:', err);
});