type BreadCrumbSection = {
  key: string,
  section: string
}

type BreadCrumbProps = {
  sections: BreadCrumbSection[]
}

const BreadCrumb = ({
  sections
}: BreadCrumbProps) => {

  const sectionLength = sections.length

  return (
    <div className="flex items-center gap-2 w-full md:w-fit">
      {sections.map((section, index) => {
        return (
          <>
            <p className={`${index + 1 >= sectionLength ? 'text-[#D3D9E3] truncate' : 'text-[#2B64CE] hover:underline cursor-pointer'} mobile-caption sm:destkop-sm`}>{section.section}</p>
            {index + 1 < sectionLength && (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M14.7695 11.8081L10.3121 8.09369C9.79109 7.65947 9 8.02999 9 8.70826V15.2922C9 15.9704 9.79109 16.341 10.3121 15.9067L14.7695 12.1923C14.8895 12.0923 14.8895 11.9081 14.7695 11.8081Z" fill="#D3D9E3" />
              </svg>
            )}
          </>
        )
      })}
    </div>
  )
}

export default BreadCrumb