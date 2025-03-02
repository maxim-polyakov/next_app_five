export async function postData(url = 'localhost:3000/api', data = {value}) {
    const response = await fetch(url, {method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data)
    });
    const json = await response.json();
    return json
}