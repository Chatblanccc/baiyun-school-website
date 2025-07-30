"use server"

import { z } from "zod"

const registrationSchema = z.object({
  courseId: z.string(),
  studentName: z.string().min(2, { message: "学生姓名至少需要2个字符。" }),
  studentGrade: z.string().min(1, { message: "请填写学生当前年级。" }),
  parentName: z.string().min(2, { message: "家长姓名至少需要2个字符。" }),
  parentPhone: z.string().min(8, { message: "请输入有效的电话号码。" }),
  parentEmail: z.string().email({ message: "请输入有效的邮箱地址。" }),
})

export async function registerForCourse(prevState: any, formData: FormData) {
  const validatedFields = registrationSchema.safeParse(Object.fromEntries(formData.entries()))

  if (!validatedFields.success) {
    return {
      success: false,
      message: "信息填写不完整，请检查后重试。",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Here you would call your backend service to process the registration
  // e.g., await backend.registerStudent(validatedFields.data)
  console.log("Registering for course:", validatedFields.data)

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // For demonstration, we'll assume success
  return {
    success: true,
    message: `报名成功！我们已收到您为 “${validatedFields.data.courseId}” 课程的报名信息。`,
  }
}
