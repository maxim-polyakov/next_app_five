import { postData } from "@/app/actions/postData"

export async function getResponse (value){
    postData('http://localhost:3000/api/', value)
        .then(res => {
            alert(res.body)
        })
}