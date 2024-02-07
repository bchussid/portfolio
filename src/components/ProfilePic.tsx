import Image from "next/image"

const ProfilePic = ({containerStyles, imgSrc}: any) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  )
}

export default ProfilePic