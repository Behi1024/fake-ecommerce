function CategoryPills({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = selectedCategory === category

          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
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