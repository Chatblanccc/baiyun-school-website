interface PageHeaderProps {
  title: string
  subtitle: string
  imageUrl: string
}

export default function PageHeader({ title, subtitle, imageUrl }: PageHeaderProps) {
  return (
    <section className="relative text-white py-16 md:py-24">
      <div className="absolute inset-0 -z-10">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl opacity-90">{subtitle}</p>
      </div>
    </section>
  )
}
