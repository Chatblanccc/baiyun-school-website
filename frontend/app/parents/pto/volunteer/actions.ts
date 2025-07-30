"use server"

import { z } from "zod"

const volunteerSchema = z.object({
  name: z.string().min(2, "姓名至少需要2个字符。"),
  email: z.string().email("请输入有效的邮箱地址。"),
  phone: z.string().min(8, "请输入有效的电话号码。"),
  availability: z.array(z.string()).nonempty("请至少选择一个可用时间。"),
  roles: z.array(z.string()).nonempty("请至少选择一个偏好的角色。"),
  skills: z.string().optional(),
})

export async function submitVolunteerApplication(prevState: any, formData: FormData) {
  const validatedFields = volunteerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    availability: formData.getAll("availability"),
    roles: formData.getAll("roles"),
    skills: formData.get("skills"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      message: "信息填写不完整或有误，请检查后重试。",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Here you would call your backend service to store the application
  // e.g., await backend.createVolunteerApplication(validatedFields.data)
  console.log("Submitting volunteer application to backend:", validatedFields.data)

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return {
    success: true,
    message: "感谢您的申请！我们已收到您的志愿者申请，并将尽快与您联系。",
    errors: null,
  }
}
