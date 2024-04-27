"use server"

import { z } from "zod";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX } from "../lib/constants";

const formSchema = z.object({
    email: z.string().email().toLowerCase(),
    password: z.string({
        required_error:"값을 입력하세요",
        invalid_type_error:"형식에러"
    }).min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX,"형식에러")
})

//2개의 변수를 전달해야하니 여기도 prevState:any 를 추가한다. 

export async function login(prevState: any, formData: FormData) {
    //FormData는 규칙인가?

    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    }

    //          errors={state?.fieldErrors.email} page에서 이렇게해야 에러 보이는것은 숙지해두기
    
    const result = formSchema.safeParse(data);
    if(!result.success) {
        return result.error.flatten()
    } else {
        console.log(result.data)
    }



    //name속성에 있는 value를 가져오는 규칙.
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log("hihihi")
    // console.log(prevState)
    // return {
    //     errors: ['틀림', '틀림2']
    // }
    //언제끝날지 체크하는 hook이 필요. 아니 끝나는걸 감시하는. -> pending
    //결과를 알고싶은 훅이 필요..... useFormStatus. 이게 스타터스.
}