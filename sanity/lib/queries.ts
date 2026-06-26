export const universitiesQuery = `
*[_type == "university"] | order(_createdAt desc){
  _id,
  name,
  fees,
  rating,
  featured,
  logo,
  "slug": slug.current
}
`