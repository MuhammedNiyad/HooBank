import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, exercitationem.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-full h-full" />
      </div>
    </section>
  )

export default CardDeal