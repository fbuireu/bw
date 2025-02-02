import { useStaticQuery, graphql } from "gatsby"

/* Explanation: I all the authors in a separate static Query. Why? Because I think it separates concerns and logics.
 In that way, you can reuse and get the authors from anywhere in the app. If I put this query in the useBlogRollQuery.js, I'm sticking business logic meaning
 that always I get all the blogs, I also get the authors. If this is ALWAYS what you need, you can combine them but either way you can still calling both hooks if needed to combine
*/

export const useSchedule = () => {
  const data = useStaticQuery(
    graphql`
      query getSchedule {
        allScheduleJson {
          nodes {
            date
            class1
            class2
            class3
            class4
            description1
            description2
            description3
            description4
            signup1
            signup2
            signup3
            signup4
            time1
            time2
            time3
            time4
            teacher1
            teacher2
            teacher3
            teacher4
            teacherlink1
            teacherlink2
            teacherlink3
            teacherlink4
            fullmoon
            newmoon
            ekadashi
          }
        }
      }
    `
  )
  //   /* EXPLANATION: we just return from data the allAuthorsJson (is the node name we are querying) and from there, the nodes (the array of authors).
  //      This means that when we are calling useAuthors() we will get an array of authors (data.allAuthorsJson.nodes)
  //     */
  return data.allScheduleJson.nodes
}
