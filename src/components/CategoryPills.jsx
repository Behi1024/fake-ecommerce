function CategoryPills({ categories }) {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            className="rounded-full border border-[#F1C4E8] bg-white px-5 py-3 text-sm font-medium text-[#7C3A64] transition hover:bg-[#FFF3FB]"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  )
}

export default CategoryPills