/**
 * LETS SAY THIS "FILE" IS FOR FETCHING OF DATA(OUR POST)
 */

const newsLetterPosts = [
    {id: 1, name: 'News Post 1'},
    {id: 2, name: 'News Post 2'}
];




/***
 * USING NORMAL FUNCTION FOR THE "EXPORTING" WHEN USING - ES MODULE
 */
// export default function getNewsPosts() {
//     return newsLetterPosts;
// }




/**
 * USING "ARROW FUNCTION" FOR THE "EXPORTING" WHEN USING - ES MODULE
 */
export const getNewsPosts = () => newsLetterPosts;

export const getPostsLength = () => newsLetterPosts.length;