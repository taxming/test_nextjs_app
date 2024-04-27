"use server"

//2개의 변수를 전달해야하니 여기도 prevState:any 를 추가한다. 

export async function handleForm(prevState:any ,formData: FormData) {
    //FormData는 규칙인가?

    console.log(formData.get("password"))

    //name속성에 있는 value를 가져오는 규칙.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("hihihi")
    console.log(prevState)
    return {
        errors:['틀림','틀림2']
    }
    //언제끝날지 체크하는 hook이 필요. 아니 끝나는걸 감시하는. -> pending
    //결과를 알고싶은 훅이 필요..... useFormStatus. 이게 스타터스.
}