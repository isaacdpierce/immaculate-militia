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
            <span style={headingSubtitleStyles}>Sept. 28 - Oct. 7 (Feast Day)</span>
          </h1>
          <p style={paragraphStyles}>
            Join us in daily prayer to our Blessed Mother for her immediate intercession to save our children and strengthen the parents who are being bullied and manipulated into injecting an immoral, experimental “vaccine”. 
          </p>
          <p style={paragraphStyles}>
            Join us in daily prayer to our Blessed Mother for her immediate intercession to save our children and strengthen the parents who are being bullied and manipulated into injecting an immoral, experimental “vaccine. 
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
          If possible, attend Daily Holy Mass and offer the intentions stated above to the Precious Body, Blood and Divinity of Our Lord in the Blessed Sacrament at the moment of consecration.
          </p>
          <h3 style={headingStyles}>The Rosary</h3>
          <p style={paragraphStyles}>Dedicate your daily Rosary and any other daily prayers the intentions stated above.
          <br />
          <br />
          God grant us the strength to resist the social pressures and medical tyranny rampant in our modern world.
          </p>
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
