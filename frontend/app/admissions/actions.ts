"use server"

import { z } from "zod"

const admissionsSchema = z.object({
  studentName: z.string().min(2, { message: "学生姓名至少需要2个字符。" }),
  applyGrade: z.string().min(1, { message: "请填写申请年级。" }),
  parentName: z.string().min(2, { message: "家长姓名至少需要2个字符。" }),
  parentPhone: z.string().min(8, { message: "请输入有效的电话号码。" }),
  message: z.string().optional(),
})

export async function submitAdmissionsInquiry(prevState: any, formData: FormData) {
  const validatedFields = admissionsSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!validatedFields.success) {
    return {
      success: false,
      message: "表单验证失败。",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  console.log("Submitting to backend:", validatedFields.data)
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: "您的申请咨询已成功提交，我们的招生老师会尽快与您联系！",
  }
}
