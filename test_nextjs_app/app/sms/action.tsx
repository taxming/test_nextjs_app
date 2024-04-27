"use server"
import z from "zod";
import validator from "validator"
import { redirect } from "next/navigation";

// const formSchema = z.object({
//     phone: z.string(),
//     token: z.string()
// })

const phoneSchema = z.string().trim().refine((phone) => validator.isMobilePhone(phone, "ko-KR"), "틀린 핸드폰번호");
const tokenSchema = z.coerce.number().min(100000).max(999999)
//number입력시 자동 스트링 변호나되므로
//coerce은 입력된 스트링값이 숫자로 변환이 될수있어야만 통과 

//action 규칙. use server 1. async사용  2. prevState: any, formData: FormData
//npm install validator

interface ActionState {
    token: boolean,
}

export async function smsVerification(prevState: ActionState, formData: FormData) {
        const phone =  formData.get("phone");
        const token =  formData.get("token");
    

    if (!prevState.token) {
        const result = phoneSchema.safeParse(phone);
        if (!result.success) {
            console.log(result.error.flatten())
            return {
                token: false,
                error: result.error.flatten()
            };
        } else {
            return {
                token: true
            }
        }
    } else {
        const result = tokenSchema.safeParse(token);
        if (!result.success) {
            console.log(result.error.flatten())
            //참고 : fieldErrors => 폼 오브젝트 전체 검증할때 나오는 에러
            //참고 : formErrors
            return {
                token: true,
                error: result.error.flatten()

            }

            //이 토큰값을 게쏙 true로 해줘야 prevState가 정상작동하겠지?
            //return erros
            //주의 ! return을 해줘야 prevState에 들어감. 리턴필수
        } else {
            redirect("/")
        }
    }
}
