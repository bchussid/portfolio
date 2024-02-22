import Image from "next/image"

const ProfilePic = ({containerStyles, imgSrc}: any) => {
  return (
    <div className={`${containerStyles}`}>
      {/* should be able to add custom border radius via containerStyles but it wasn't working ---- className="rounded-profile"*/}
      <Image src={imgSrc} fill priority alt="" />
    </div>
  )
}

export default ProfilePic