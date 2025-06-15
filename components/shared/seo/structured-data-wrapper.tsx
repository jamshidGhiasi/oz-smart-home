'use client'

const StructuredDataWrapper = ({ data } : { data:  Record<string, any> | Record<string, any>[]}) => {
  return <script type="application/ld+json">{JSON.stringify(data)}</script>
}

export default StructuredDataWrapper