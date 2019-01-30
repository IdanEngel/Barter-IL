const userData = require('./src/dummyData')

const goTroughLikes = function (currentUser, likedUser) {
    let liked = likedUser.likes.find(like => like === currentUser._id.$oid)
    console.log(liked)
    if (liked) {
        currentUser.matches.push(likedUser._id.$oid)
        likedUser.matches.push(currentUser._id.$oid)
        likedUser.likes.findIndex(index => likedUser.likes.splice(index, 1))
        console.log(`you have a match with ${likedUser.name}!`)
    } else {
        currentUser.likes.push(likedUser._id.$oid)
    }
     



    console.log(currentUser.matches)
    console.log(likedUser.matches)
    console.log(currentUser.likes)
    console.log(likedUser.likes)

}
goTroughLikes(userData[2], userData[3])

