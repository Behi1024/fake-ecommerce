function CategoryPills({ categories }) {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => {
          const isActive = index === 1

          return (
            <button
              key={category}
              className={`rounded-full border px-6 py-3 text-base font-medium transition ${
                isActive
                  ? "border-[#FF6A1A] bg-[#FF6A1A] text-white shadow-md"
                  : "border-[#FFD7C2] bg-white text-[#D65A14] hover:border-[#FF6A1A] hover:bg-[#FFF4ED] hover:text-[#FF6A1A]"
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default CategoryPills