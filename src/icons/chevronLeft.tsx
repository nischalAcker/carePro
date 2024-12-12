/* eslint-disable @typescript-eslint/no-explicit-any */

const ChevronLeft = (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="#2A0038"
        fillRule="evenodd"
        d="M15.707 18.707a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 1 1 1.414 1.414L10.414 12l5.293 5.293a1 1 0 0 1 0 1.414Z"
        clipRule="evenodd"
      />
    </svg>
)

export default ChevronLeft;