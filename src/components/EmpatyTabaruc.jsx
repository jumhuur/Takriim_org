import Image from "next/image";
function EmpatyTabaruc() {
  return (
    <div className="empaty">
      <div className="sawir">
        <Image fill={true} src="/Images/search1.svg" alt="empaty" />
        {/* <Lottie animationData={animationData}  /> */}
      </div>
      <p className="not_foundmessage">Wali Laguma Tabarucin mashruucan</p>
      <br></br>
      <div className="ayad in_info">
        <div className="haye">
          <div className="nas_ayad empaty">
            <Image fill={true} src="/Images/lntnalo-ayah2.svg" alt="ayad" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpatyTabaruc;
