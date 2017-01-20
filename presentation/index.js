// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  S
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  twitter: require("../assets/twitter.white.svg"),
  github: require("../assets/github.white.svg"),
  markdown: require("../assets/markdown.png"),
  futurice: require("../assets/futurice.svg"),
  mindBlown: require("../assets/mind-blown.gif"),
  vaguelyHow: require("../assets/vaguely-how.svg"),
  derivables: require("../assets/derivables.svg"),
  jori: require("../assets/jori.png"),
  dan: require("../assets/dan.png"),
  inconsistency: [
    require("../assets/inconsistency1.svg"),
    require("../assets/inconsistency2.svg"),
    require("../assets/inconsistency3.svg"),
    require("../assets/inconsistency4.svg"),
    require("../assets/inconsistency5.svg"),
    require("../assets/inconsistency6.svg")
  ],
  consistency: [
    require("../assets/consistency1.svg"),
    require("../assets/consistency2.svg"),
    require("../assets/consistency3.svg"),
    require("../assets/consistency4.svg"),
    require("../assets/consistency5.svg"),
    require("../assets/consistency6.svg"),
    require("../assets/consistency7.svg"),
    require("../assets/consistency8.svg"),
    require("../assets/consistency9.svg"),
    require("../assets/consistency10.svg")
  ]
};

const code = {
  manualOnHeap: require("raw!../assets/manual-on-heap.example"),
  artificialEvents: require("raw!../assets/artificial-events.example"),
  derivable: require("raw!../assets/derivable.example"),
};

preloader(images);

const theme = createTheme({
  primary: "black",
  pink: "#ec607f",
  yellow: "#f6d743",
  green: "#48f3a5",
  grey: "#999"
}, {
  primary: "Sharp Sans No1",
  secondary: { name: "Droid Serif", googleFont: true, styles: [ "400", "700i" ] }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme} bgColor="black">
        <Deck transition={["zoom", "slide"]} transitionDuration={500} bgcolor="black">
          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={7} fit caps lineHeight={1} textColor="white">
              Bottling React's
            </Heading>
            <Heading size={1} fit textColor="pink" caps>
              Secret sauce
            </Heading>
            <Text display="inline" textColor="white">
              <Image src={images.futurice} width={180} margin="0 18px -4px"/>
              <Link href="https://twitter.com/djsheldrick" display="inline" textColor="white">
                <Image display="inline" src={images.twitter} width={100} margin="0 0 -35px" />
                @djsheldrick
              </Link>
              <Link href="https://github.com/ds300" display="inline" textColor="white">
                <Image display="inline" src={images.github} width={120} margin="0 0 -17px" padding="0 24px" />
                @ds300
              </Link>
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="yellow">
              premise
            </Heading>
            <Heading caps textColor="white">
              React is clever and good
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="want to talk about it with technical specificity">
            <Heading size={2} caps fit textColor="yellow">
              Why?
            </Heading>
            <Heading caps textColor="white">
              What's the big idea?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit textColor="yellow">
              SO what?
            </Heading>
            <Heading caps textColor="white">
              Can we leverage the same insight elsewhere?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="yellow">
            <Heading size={1} caps fit textColor="pink">
              Simple State Management
            </Heading>
            <Text textColor="black" padding="40px 0" bold>
              enables
            </Text>
            <Heading size={1} caps fit textColor="pink">
              Simple Effects Management
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="yellow">
            <Text>
              <strong>What the heck is state</strong> and how do we manage it?
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="yellow">
            <Heading size={1} caps textColor="pink">
              State is
            </Heading>
            <Text padding="25px 0">
              <strong>Information about the world</strong> [ data ]
            </Text>
            <Text padding="25px 0">
              <strong>Inert, malleable, continuous</strong>
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={6} caps textColor="white" fontSize="80px">
              type 1
            </Heading>
            <Heading size={3} caps textColor="green" fontSize="80px">
              Constant State
            </Heading>
            <Text textColor="white">
              [ &nbsp;couldn't be more boring&nbsp; ]
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={6} caps textColor="white" fontSize="80px">
              type 2
            </Heading>
            <Heading size={3} caps textColor="green" fontSize="80px">
              Stack state
            </Heading>
            <List textColor="white">
              <ListItem>Function arguments</ListItem>
              <ListItem>Loop variables</ListItem>
              <ListItem>Intermediate results</ListItem>
              <ListItem>...</ListItem>
            </List>
            <Text textColor="white" padding="20px 0">
              [ &nbsp;easy to manage&nbsp; ]
            </Text>
            <Text textColor="white">
              [ &nbsp;use tastefully restrictive tools&nbsp; ]
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="yellow">
            <Text>
              Some apps are basically functions and get by with
              <strong> only constant and stack state.</strong>
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="yellow">
            <Text>
              Most apps <strong>sit around waiting for external events </strong>
              to trigger internal behaviour.
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={3} caps textColor="pink" fontSize="80px">
              EVENTS
            </Heading>
            <Text textColor="white">
              [ &nbsp;things that happened&nbsp; ]
            </Text>
            <List textColor="white">
              <ListItem>Data about single points in time</ListItem>
              <ListItem>Invasive forces</ListItem>
              <ListItem>Used to trigger <strong>Effects</strong></ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={3} caps textColor="pink" fontSize="80px">
              EFFECTS
            </Heading>
            <Text textColor="white" padding="0px 0px 30px">
              [ &nbsp;things that happen<s style={{opacity: 0.2}}>ed</s>&nbsp; ]
            </Text>
            <Text textColor="white" textAlign="left">
              Either:
            </Text>
            <List textColor="white">
              <ListItem>Persistent changes to internal state</ListItem>
              <ListItem>Behaviour in other systems</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="yellow">
            <Markdown>
              What to call this **persistent, changing internal state**?
            </Markdown>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={6} caps textColor="white" fontSize="80px">
              type 3
            </Heading>
            <Heading size={3} caps textColor="green" fontSize="80px">
              Heap state
            </Heading>
            <List textColor="white">
              <ListItem>Kept in memory <em>on the heap</em> </ListItem>
              <ListItem>Changed in response to events</ListItem>
              <ListItem>Changes persist across call stacks</ListItem>
            </List>
            <Text textColor="white" padding="20px 0">
              [ &nbsp;still quite easy to manage&nbsp; ]
            </Text>
            <Text textColor="white">
              [ &nbsp;FP, Event Sourcing, STM, Actors, CSP...&nbsp; ]
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={6} textColor="white" fontSize="80px">
              TYPE 3a
            </Heading>
            <Heading size={3} caps textColor="green" fontSize="80px">
              Atomic state
            </Heading>
            <Text textColor="white">
              [ &nbsp;normalized app data&nbsp; ]
            </Text>
            <List textColor="white">
              <ListItem>Ignoring perf, the minimum information your app needs to function correctly.</ListItem>
              <ListItem>Must not be computable by looking at other bits of state.</ListItem>
            </List>
            <Text textColor="white" padding="20px 0">
              [ &nbsp;e.g. count, todos,
            </Text>
            <Text textColor="white">
              mouseX, db cache, ...&nbsp; ]
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={6} textColor="white" fontSize="80px">
              TYPE 4
            </Heading>
            <Heading size={3} caps textColor="green" fontSize="80px">
              Derived state
            </Heading>
            <Text textColor="white">
              [ &nbsp;<code><span style={{color: theme.screen.colors.pink}}>derive</span><span style={{color: theme.screen.colors.grey}}>(</span><span style={{color: theme.screen.colors.yellow}}>atomicState</span><span style={{color: theme.screen.colors.grey}}>)</span></code>&nbsp; ]
            </Text>
            <Text textColor="white" textAlign="left">
              e.g.
            </Text>
            <List textColor="white">
              <ListItem>Whether or not an input form is valid</ListItem>
              <ListItem>The number of idle users in an IRC channel</ListItem>
              <ListItem>The pixel width of a <code>div</code> whose width is specified in percent</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="pink">
            <Heading size={4} textColor="black" fontSize="80px">
              <span style={{color: "white"}}>We mostly suck</span> at managing derived state
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={6} caps textColor="white" fontSize="80px">
              Approach 1
            </Heading>
            <Heading size={3} caps textColor="pink" fontSize="80px">
              Not managing it
            </Heading>
            <Text textColor="white">
              [ &nbsp; re-computing before each use &nbsp; ]
            </Text>
            <List textColor="white">
              <ListItem>Means all derived state is also stack state</ListItem>
              <ListItem>Lots of extra CPU/GC usage</ListItem>
              <ListItem>Difficult to stay DRY</ListItem>
              <ListItem>Poor separation of concerns</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={6} caps textColor="white" fontSize="80px">
              Approach 2
            </Heading>
            <Heading size={3} caps textColor="pink" fontSize="80px">
              MANUAL ON-HEAP
            </Heading>
            <CodePane source={code.manualOnHeap} lang="js" textSize="20pt" />
            <List textColor="white">
              <ListItem>Implicit relationships</ListItem>
              <ListItem>Worse separation of concerns</ListItem>
              <ListItem>Not scalable at all</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={6} caps textColor="white" fontSize="80px">
              Approach 3
            </Heading>
            <Heading size={3} caps textColor="pink" fontSize="80px">
              Automatic ON-HEAP
            </Heading>
            <Heading size={3} caps textColor="pink" fontSize="80px">
              With artificial events
            </Heading>
            <CodePane source={code.artificialEvents} lang="js" textSize="20pt" />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={6} caps textColor="white" fontSize="80px">
              Approach 3
            </Heading>
            <Heading size={3} caps textColor="pink" fontSize="80px">
              Automatic ON-HEAP
            </Heading>
            <Heading size={3} caps textColor="pink" fontSize="80px">
              With artificial events
            </Heading>
            <List textColor="white">
              <ListItem>Solves most SoC problems</ListItem>
              <ListItem>Quite robust with, e.g. Rx</ListItem>
              <ListItem>Always vulnerable to inconsistency.</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="left">
              inconsistency
            </Heading>
            <Image src={images.inconsistency[0]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["none"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="left">
              inconsistency
            </Heading>
            <Image src={images.inconsistency[1]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["none"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="left">
              inconsistency
            </Heading>
            <Image src={images.inconsistency[2]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["none"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="left">
              inconsistency
            </Heading>
            <Image src={images.inconsistency[3]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["none"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="left">
              inconsistency
            </Heading>
            <Image src={images.inconsistency[4]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["none"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="left">
              inconsistency
            </Heading>
            <Image src={images.inconsistency[5]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["slide"]} bgColor="pink">
            <Heading size={4} textColor="black" fontSize="80px">
              Events are <span style={{color: "white"}}>obnoxious bullies</span>
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="pink">
            <Heading size={4} textColor="black" fontSize="80px">
              Event handlers <span style={{color: "white"}}>must</span> be allowed to operate in a consistent world
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="yellow">
            <Heading size={2} fit textColor="black">
              PUSH-PULL
            </Heading>
            <Text fit textColor="black">
              to the rescue
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="right">
              push-pull
            </Heading>
            <Image src={images.consistency[0]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["none"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="right">
              push-pull
            </Heading>
            <Image src={images.consistency[1]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["none"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="right">
              push-pull
            </Heading>
            <Image src={images.consistency[2]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["none"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="right">
              push-pull
            </Heading>
            <Image src={images.consistency[3]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["none"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="right">
              push-pull
            </Heading>
            <Image src={images.consistency[4]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["none"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="right">
              push-pull
            </Heading>
            <Image src={images.consistency[5]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["none"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="right">
              push-pull
            </Heading>
            <Image src={images.consistency[6]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["none"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="right">
              push-pull
            </Heading>
            <Image src={images.consistency[7]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["none"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="right">
              push-pull
            </Heading>
            <Image src={images.consistency[8]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["none"]} bgColor="black">
            <Heading size={5} textColor="yellow" fontSize="80px" textAlign="right">
              push-pull
            </Heading>
            <Image src={images.consistency[9]} height="60vh" width="80%" />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={6} caps textColor="white" fontSize="80px">
              Approach 4
            </Heading>
            <Heading size={3} caps textColor="yellow" fontSize="80px">
              push-pull
            </Heading>
            <List textColor="white">
              <ListItem>Solves a bunch of problems</ListItem>
              <ListItem>Requires clean separation of effects and state</ListItem>
              <ListItem>Is tastefully restrictive</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.vaguelyHow} fit />
          </Slide>
          <Slide transition={["slide"]} bgColor="pink" notes="makes it difficult to maintain a clean separation between atomic and derived state">
            <Text textColor="black" textAlign="left" padding="0 0 40px">
              primary beefs
            </Text>
            <Heading fit size={4} textColor="black" fontSize="80px">
              React only cares about <span style={{color: "white"}}>deriving VDOM</span>
            </Heading>
          </Slide>
          <Slide transition={["none"]} bgColor="pink">
            <Text textColor="black" textAlign="left" padding="0 0 40px">
              primary beefs
            </Text>
            <Heading fit size={4} textColor="black" fontSize="80px">
              React only cares about <span style={{color: "white"}}>rearranging trees</span>
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="pink">
            <BlockQuote>
              <Quote>What if I told you that side effects are just state changes in other systems?</Quote>
              <Cite>React</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" bgImage={images.mindBlown} />
          <Slide transition={["slide"]} bgColor="pink">
            <BlockQuote>
              <Quote>
                <Text fontSize="80pt">
                  What if we could execute side effects by outlining the
                  state we want an external system to be in, and letting someone
                  else figure out how to put it in that state?
                </Text>
              </Quote>
              <Cite>React</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="pink">
            <Heading size={4} textColor="black" fontSize="80px">
              These are very general ideas but
              <span style={{color: "white"}}>
                &nbsp;React is frustratingly narrow in focus
              </span>
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="yellow">
            <Text fit textColor="black">
              introducing
            </Text>
            <Heading size={2} fit textColor="black">
              DERIVABLES
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="yellow">
            <Text fit textColor="black">
              general purpose
            </Text>
            <Heading size={2} fit textColor="black">
              push-pull
            </Heading>
            <Text fit textColor="black">
              for great good
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.derivables} fit />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} textColor="pink">
              Implementing Libraries
            </Heading>
            <List textColor="white">
              <ListItem><strong>MobX</strong> (observable, computed, reaction)</ListItem>
              <ListItem><strong>DerivableJS</strong> 😊</ListItem>
              <ListItem><strong>Agera</strong> (by Google for Android Java)</ListItem>
              <ListItem>Maybe: <strong>Shiny</strong> (R), <strong>KnockoutJS,</strong> probably others?</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="yellow">
            <Image src={images.jori} width="80%" />
          </Slide>
          <Slide transition={["slide"]} bgColor="yellow">
            <Image src={images.dan} width="80%" />
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            bgColor="black"
            titleStyle={{border: 'none'}}
            code={code.derivable}
            ranges={[
              { loc: [0, 1], title: "Hello Derivables" },
              { loc: [2, 8], title: "Declaring atomic state" },
              { loc: [9, 12], title: "Declaring derived state" },
              { loc: [13, 16], title: "Declaring derived state" },
              { loc: [17, 20], title: "Declaring derived state" },
              { loc: [21, 29], title: "Declaring side effects" },
              { loc: [30, 36], title: "Updating atomic state" },
              { loc: [37, 42], title: "Updating atomic state" },
            ]}
          />
        </Deck>
      </Spectacle>
    );
  }
}
