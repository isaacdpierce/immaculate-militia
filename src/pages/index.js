import * as React from "react"
import "../components/layout.css"
import "../components/reset.css"

import Image from "../components/Image";

// styles
const pageStyles = {
  position: 'relative',
  background: '#0C2941',
  color: "#fff",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: '100vh'
  
}

const headingStyles = {
  marginTop: 64,
  marginBottom: 64,
  fontWeight: 100,
  textTransform: 'uppercase',
  letterSpacing: 3,
  textAlign: 'center'
}
const headingAccentStyles = {
  color: "#ffffff",
  fontSize: 24
}
const headingSubtitleStyles = {
  color: "#ffffff",
  fontSize: 18,
  textTransform: 'none',
}
const paragraphStyles = {
  marginBottom: 48,
  fontSize: 24,
  fontWeight: 300
}

const indentParagraph = {
  ...paragraphStyles,
  marginLeft: 40
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#eee",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <section className="main-content">
        <aside className="main-text-content">
          <Image
            src="heart.png"
            alt="heart"
            style={{
              height: "130px",
              width: "100px",
              margin: "0 auto",
            }}
          />
          <h1 style={headingStyles}>
            Save Our Children Novena
            <br />
            <span style={headingAccentStyles}>To Our Lady of The Rosary</span>
            <br />
            <span style={headingSubtitleStyles}>Sept. 28<sup>th</sup> - Oct. 6<sup>th</sup> </span>
          </h1>
          <p style={paragraphStyles}>
            Join us in daily prayer to our Blessed Mother for her immediate intercession to save our children and strengthen the resolve of parents who are being bullied and manipulated into injecting an immoral, experimental “vaccine”. 
          </p>
          <p style={paragraphStyles}>
            Virgin Most Powerful — Pray for us.
          </p>
          <h2 style={headingStyles}>
            Intentions
            <br />
          </h2>
          <p style={paragraphStyles}>
          1) To guard the spiritual, physical and mental and health of our children in these diabolical times.
          <br/>
          <br/>
          2) For the wisdom, strength and perseverance of all the parents who continue to resist the social pressures of injecting themselves and their children with experimental, abortion-tainted vaccines.
          <br/>
          <br/>
          3)To open hearts, minds and eyes to the truth of this pandemic and these experimental vaccines.
          </p>
          <h2 style={headingStyles}>
            Prayers
            <br />
          </h2>
          <h3 style={headingStyles}>The Holy Sacrifice of the Mass 
          <br />
          <br />
          <span style={headingSubtitleStyles}>The most powerful prayer of all</span>
          </h3>
          <p style={paragraphStyles}>
          If possible, attend daily Holy Mass and offer the intentions stated above to the Precious Body, Blood and Divinity of Our Lord in the Blessed Sacrament at the moment of consecration.
          </p>
          <h3 style={headingStyles}>The Rosary</h3>
          <p style={paragraphStyles}>Dedicate your daily Rosary and any other daily prayers the intentions stated above.
          <br />
          <br />
          God grant us the strength to resist the social pressures and medical tyranny rampant in our modern world.
          </p>

          <h3 style={headingStyles}>Daily Prayer</h3>

          <p style={paragraphStyles}>My dearest Mother Mary, behold me, your child, in prayer at your feet. Accept this Holy Rosary, which I offer you in accordance with your requests at Fatima, as a proof of my tender love for you, for the intentions of the Sacred Heart of Jesus, in atonement for the offenses committed against your Immaculate Heart, and for this special favor which I earnestly request in my Rosary Novena:
          </p>
          <p style={paragraphStyles}>Please open hearts, minds and eyes to the truth of this pandemic and these experimental vaccines, guard the spiritual, physical and mental health of our children, and provide parents and caregivers with the wisdom, strength and perseverance so they have the resolve to resist the social pressures associated with these experimental vaccines. We ask that our trusted institutions cease all efforts to coerce and manipulate parents and young people into participating in this medical intervention.</p>
          <p style={paragraphStyles}>
            I beg you to present my petition to your Divine Son. If you will pray for me, I cannot be refused. I know, dearest Mother, that you want me to seek God’s holy Will concerning my request. If what I ask for should not be granted, pray that I may receive that which will be of greater benefit to my soul.
            I offer you this spiritual “Bouquet of Roses” because I love you. I put all my confidence in you, since your prayers before God are most powerful. For the greater glory of God and for the sake of Jesus, your loving Son, hear and grant my prayer. Sweet Heart of Mary, be my salvation. 
          </p>
          <p style={paragraphStyles}>Our Father, Hail Mary & Glory Be...</p>


          <h2 style={headingStyles}>Optional Prayer
          <br />
          <br />
          <span style={headingSubtitleStyles}>For the Prayer Warriors</span>
          </h2>


{/* ======================================================== */}

          <h3 style={headingStyles}>Padre Pio’s Secret Weapon Prayer
          <br />
          <br />
          <span style={headingSubtitleStyles}>(Efficacious Novena to the Sacred Heart of Jesus by St. Margaret Mary Alacoque)</span>
          </h3>

          <p style={paragraphStyles}>


I. O my Jesus, you have said: “Truly I say to you, ask and you will receive, seek and you will find, knock and it will be opened to you.” Behold I knock, I seek and ask for:


</p>
<p style={indentParagraph}>
          1) You to guard the spiritual, physical and mental and health of our children. 
          <br/>
          <br/>
          2) The wisdom, strength and perseverance of the all parents. That they continue to resist the social pressures of injecting themselves and their children with experimental, abortion-tainted vaccines. 
          <br/>
          <br/>
          3)To open hearts, minds and eyes to the truth of this pandemic and these experimental vaccines.
          <br/>
          <br/>
Our Father….Hail Mary….Glory Be to the Father….Sacred Heart of Jesus, I place all my trust in you.
  </p>

<p style={paragraphStyles}>
II. O my Jesus, you have said: “Truly I say to you, if you ask anything of the Father in my name, he will give it to you.” Behold, in your name, I ask the Father for:
</p>
<p style={indentParagraph}>
          1) You to guard the spiritual, physical and mental and health of our children. 
          <br/>
          <br/>
          2) The wisdom, strength and perseverance of the all parents. That they continue to resist the social pressures of injecting themselves and their children with experimental, abortion-tainted vaccines. 
          <br/>
          <br/>
          3)To open hearts, minds and eyes to the truth of this pandemic and these experimental vaccines.
          <br/>
          <br/>
          Our Father….Hail Mary….Glory Be to the Father….Sacred Heart of Jesus, I place all my trust in you.
</p>

<p style={paragraphStyles}>
III. O my Jesus, you have said: “Truly I say to you, heaven and earth will pass away but my words will not pass away.” Encouraged by your infallible words I now ask for:
</p>
        <p style={indentParagraph}>
          1) You to guard the spiritual, physical and mental and health of our children. 
          <br/>
          <br/>
          2) The wisdom, strength and perseverance of the all parents. That they continue to resist the social pressures of injecting themselves and their children with experimental, abortion-tainted vaccines. 
          <br/>
          <br/>
          3)To open hearts, minds and eyes to the truth of this pandemic and these experimental vaccines.
          <br/> 
<br/>
Our Father….Hail Mary….Glory Be to the Father….Sacred Heart of Jesus, I place all my trust in you.
  </p>

<p style={paragraphStyles}>
O Sacred Heart of Jesus, for whom it is impossible not to have compassion on the afflicted, have pity on us miserable sinners and grant us the grace which we ask of you, through the Sorrowful and Immaculate Heart of Mary, your tender Mother and ours.
</p>
<p style={paragraphStyles}>
Say the Hail, Holy Queen and add: St. Joseph, foster father of Jesus, pray for us.
</p>
<Image
            src="heart.png"
            alt="heart"
            style={{
              height: "130px",
              width: "100px",
              margin: "0 auto",
            }}
          />

        </aside>
        <aside className="main-image">
          <Image
            src="mary_1.jpeg"
            alt="Mary"
          />
        </aside>
      </section>
    </main>
  )
}

export default IndexPage
