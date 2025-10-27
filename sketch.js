let headlines = [
  "I'M A GENIUS!",
  "HOLY SH*T, I'M RICH!",
  "IT'S FINALLY HAPPENING!",
  "I'm retiring early!!!",
  "We’re going to the moon, baby!",
  "This is the best day of my life!",
  "I JUST MADE 10 YEARS OF SALARY IN ONE TRADE!",
  "It's unstoppable!",
  "I knew it! I KNEW IT!",
  "Who’s laughing now?!",
  "They called me crazy, now I’m rich!",
  "I’m buying that Lambo tomorrow!",
  "THE BULLS ARE BACK!",
  "This trade will go down in history!",
  "Haters gonna hate, but I’m counting cash.",
  "Finally, I’m beating the system!",
  "They said it’s impossible. I proved them wrong.",
  "This is the power of diamond hands!",
  "I’m literally unstoppable right now!",
  "Hell yes, my portfolio is GREEN!!!",
  "I’M A LEGEND!",
  "This is the trade of a lifetime!",
  "I'm going to buy a house with this!",
  "The bulls are unstoppable!",
  "Let’s f*cking go!",
  "It’s only up from here!",
  "I’ve cracked the code!",
  "This is how fortunes are made!",
  "I’m going to tell my boss to shove it!",
  "I’m buying everything in sight!",
  "My portfolio is exploding!",
  "I can’t believe I’m this good!",
  "The market loves me today!",
  "I KNEW I was destined for this!",
  "This is my masterpiece!",
  "Every trade is a winner today!",
  "I’m officially financially free!",
  "It’s like printing money!",
  "The green never stops!",
  "I can’t lose. I literally can’t lose!",
  "I LOST EVERYTHING!",
  "What the f*ck just happened!?",
  "Oh no, not again...",
  "I CAN’T BELIEVE THIS SH*T!",
  "My account is wiped out. I’m done.",
  "Why didn’t I sell when I had the chance?",
  "I’ll never recover from this.",
  "It’s all gone... EVERYTHING!",
  "Why does this always happen to me?!",
  "This is the worst day of my life.",
  "I shouldn’t have listened to those idiots!",
  "The market f*cking hates me.",
  "Goddamn it, why didn’t I set a stop loss!?",
  "I just lost my life savings. Holy sh*t.",
  "I’M RUINED!",
  "I was so close to breaking even...",
  "How the hell did I miss that signal?!",
  "I need a drink… or five.",
  "What the hell just happened!?",
  "I’m never getting my money back.",
  "I’m officially bankrupt.",
  "I’ve lost everything I’ve worked for.",
  "Should I just quit now?",
  "This is rigged! It HAS to be!",
  "Why am I like this? Seriously...",
  "I’ll get it back next time. I always do.",
  "F*ck this market, man.",
  "Is this the end or a new beginning?",
  "I can't handle this volatility anymore.",
  "What if it’s just a temporary dip?",
  "I should’ve stayed in index funds.",
  "Tomorrow’s a new day. I’ll try again.",
  "I should have sold earlier!",
  "It’s a buying opportunity!",
  "This crash is unprecedented!",
  "Finally, my portfolio is green!",
  "I can’t believe I trusted them!",
  "My stop loss just triggered!",
  "It’s going to the moon!",
  "Why didn’t I hedge my positions?",
  "This has to be market manipulation!",
  "Time to go all in!",
  "I’m out of cash for averaging down!",
  "The bulls are back!",
  "It’s a dead cat bounce!",
  "I need to diversify more!",
  "This is the worst day of my life!",
  "I’m retiring early!",
  "Why didn’t I buy sooner?",
  "Everyone told me to hold!",
  "It’s just a correction!",
  "The market always recovers… right?",
  "This is my last trade ever!",
  "Why do I always panic sell?",
  "Diamond hands!",
  "Paper hands strike again!",
  "The Fed is going to fix this!",
  "Inflation is killing my gains!",
  "I need to double down on crypto!",
  "The bears are in control!",
  "I should’ve followed my instincts!",
  "No one could have predicted this!",
  "The charts lied to me!",
  "Is the bottom in?",
  "I’ll hold until it’s worthless!",
  "Why does this only happen to me?",
  "It’s over, I’m ruined!",
  "I finally hit my price target!",
  "This is just market noise.",
  "I’ll be rich by next year!",
  "The algo is rigged against me!",
  "They’re dumping on retail again!",
  "Why is everyone so bearish?",
  "The whales know something we don’t!",
  "I’m down 90%, so might as well hold.",
  "This stock is fundamentally sound!",
  "My TA said it would reverse!",
  "It’s time to learn options trading!",
  "I’ll just DCA until it recovers.",
  "The market is irrational today!",
  "I’ve lost everything… again!",
  "Next time, I’ll follow the trend.",
  "I’m switching to index funds!",
  "How could I be this stupid!?",
  "WHY THE F*CK DID I HOLD!?",
  "This is a total bloodbath.",
  "My portfolio is a dumpster fire.",
  "I CAN’T TAKE THIS ANYMORE!",
  "I’m never trading again. NEVER!",
  "My account is down 80%…",
  "This is financial suicide!",
  "I’ve been completely wiped out.",
  "I’m going to have to sell my car!",
  "I was so close to breaking even...",
  "The market just hates me.",
  "Why didn’t I cut my losses?",
  "I’m never trusting anyone again.",
  "The pain is unbearable.",
  "I need a drink… or five.",
  "What the hell just happened!?",
  "I’m never getting my money back.",
  "I’m officially bankrupt.",
  "I’ve lost everything I’ve worked for.",
];
let backgroundWords = []; // Array to store background words
let backgroundWordList = [
  // 2020
  `"U.S.-China Phase One Trade Deal Signed, Markets Rally" — Reuters, January 15, 2020`,
  `"Trump Impeachment Trial Begins, Sparks Market Uncertainty" — CNN, January 16, 2020`,
  `"Global Stock Markets Hit Record Highs Amid Optimism" — Bloomberg, January 22, 2020`,

  // February 2020
  `"COVID-19 Outbreak Causes First Stock Market Jitters" — The New York Times, February 3, 2020`,
  `"Tech Stocks Rally Despite Growing Virus Concerns" — CNBC, February 10, 2020`,
  `"Oil Prices Drop 15% Amid Global Travel Restrictions" — Reuters, February 25, 2020`,
  `"Dow Suffers Worst Two-Day Drop Since 2008 Financial Crisis" — Bloomberg, February 27, 2020`,

  // March 2020
  `"Global Pandemic Declared as COVID-19 Spreads Rapidly" — The Guardian, March 11, 2020`,
  `"Dow Plunges 2,000 Points as WHO Declares Global Pandemic" — CNBC, March 11, 2020`,
  `"Federal Reserve Cuts Rates to Near Zero to Combat Crisis" — Reuters, March 15, 2020`,
  `"Oil Prices Crash as OPEC Fails to Reach Agreement" — Bloomberg, March 20, 2020`,
  `"U.S. Congress Passes $2 Trillion Stimulus Package" — CNN, March 27, 2020`,

  // April 2020
  `"COVID Stimulus Checks Fuel Retail Trading Boom in 2020" — CNBC, April 15, 2020`,
  `"Unemployment Claims in the U.S. Top 6 Million" — Reuters, April 2, 2020`,
  `"Global Supply Chains Struggle as Factories Shut Down" — Bloomberg, April 18, 2020`,
  `"Oil Glut Forces Companies to Pay Buyers to Take Crude" — Bloomberg, April 20, 2020`,
  `"Tech Stocks Surge as Remote Work Becomes the Norm" — CNBC, April 25, 2020`,

  // May 2020
  `"Gold Prices Surge as Investors Seek Safe-Haven Assets" — Reuters, May 6, 2020`,
  `"Tesla Shares Rally 10% as Investors Bet on EV Growth" — Bloomberg, May 15, 2020`,
  `"Zoom Becomes a Pandemic Darling as Stock Surges 400%" — CNBC, May 20, 2020`,
  `"Hopes Rise for V-Shaped Recovery Despite Record Recession" — The Guardian, May 25, 2020`,

  // June 2020
  `"Stock Markets Rebound Sharply After Historic Pandemic Crash" — Bloomberg, June 1, 2020`,
  `"Federal Reserve Vows Unlimited Support Amid Recovery Hopes" — Reuters, June 5, 2020`,
  `"Retail Traders Surge in 2020, Market Analysts Warn of Bubble Risk" — CNBC, June 12, 2020`,
  `"S&P 500 Records Best Quarter Since 1998 Despite Pandemic" — Bloomberg, June 30, 2020`,

  // July 2020
  `"Tesla Becomes the World’s Most Valuable Automaker" — CNBC, July 1, 2020`,
  `"U.S.-China Trade Relations Deteriorate Further Amid Tariff Threats" — Reuters, July 17, 2020`,
  `"Retail Investors Pile Into Penny Stocks, Spark Volatility" — Bloomberg, July 22, 2020`,
  `"Nasdaq Hits All-Time High, Powered by Big Tech" — CNBC, July 31, 2020`,

  // August 2020
  `"Gold Hits $2,000 for the First Time in History Amid Economic Uncertainty" — Reuters, August 5, 2020`,
  `"U.S. Home Prices Surge as Suburban Living Gains Appeal" — CNBC, August 25, 2020`,
  `"Federal Reserve Announces New Inflation Strategy, Stocks Rally" — Bloomberg, August 27, 2020`,

  // September 2020
  `"Apple Stock Splits 4-to-1, Shares Surge 10%" — CNBC, September 1, 2020`,
  `"Netflix Gains 20 Million New Subscribers Amid Lockdowns" — Bloomberg, September 15, 2020`,
  `"Retail Apocalypse Accelerates as Store Closures Double" — The Wall Street Journal, September 25, 2020`,
  `"Retail Traders Dominate Markets in 2020, Analysts Warn of Risks" — CNBC, September 30, 2020`,

  // October 2020
  `"Europe Faces Second Wave of Lockdowns, Markets React" — BBC News, October 16, 2020`,
  `"Luxury Real Estate Booms as Wealthy Flee Urban Centers" — Bloomberg, October 20, 2020`,
  `"Facebook Ad Revenue Rises 22% Despite Economic Slowdown" — Reuters, October 27, 2020`,
  `"S&P 500 Posts Best October Since 2015 Amid Volatility" — CNBC, October 31, 2020`,

  // November 2020
  `"Markets Rally as Pfizer Announces 90% Effective COVID-19 Vaccine" — Bloomberg, November 9, 2020`,
  `"Biden Victory Boosts Green Energy Stocks by 15%" — The New York Times, November 7, 2020`,
  `"Tesla Joins S&P 500, Shares Jump to Record High" — The Wall Street Journal, November 21, 2020`,
  `"Dow Jones Breaks Above 30,000 for the First Time Ever" — Reuters, November 24, 2020`,

  // December 2020
  `"Brexit Deal Sparks Rally in British Pound, FTSE 100 Gains 3%" — BBC News, December 24, 2020`,
  `"Bitcoin Price Surges 300% in 2020 Amid Inflation Fears" — CoinDesk, December 31, 2020`,
  `"World Economy Shrinks by 4.3% Amid COVID Crisis" — Reuters, December 31, 2020`,
  `"Global Carbon Emissions Drop 7% in 2020 Amid Lockdowns" — The Guardian, December 12, 2020`,
  `"Airbnb IPO Soars 112% on First Day of Trading" — Bloomberg, December 10, 2020`,

  // 2021
  `"Bitcoin Hits $60,000 for the First Time" — CNBC, March 13, 2021`,
  `"El Salvador Adopts Bitcoin as Legal Tender, Prices Surge 20%" — CoinTelegraph, June 9, 2021`,
  `"GameStop Stock Skyrockets Amid Reddit Frenzy" — The Wall Street Journal, January 27, 2021`,
  `"Ethereum Hits $4,000 as DeFi and NFTs Surge" — Reuters, May 10, 2021`,
  `"Tesla Stock Hits New High as Investors Pile Into EV Market" — Bloomberg, June 15, 2021`,
  `"Global Chip Shortage Hits Auto Industry, Stocks Slump" — Reuters, August 25, 2021`,
  `"Evergrande Crisis Sparks Global Contagion Fears" — Bloomberg, September 23, 2021`,
  `"Facebook Rebrands to Meta, Shares Spike 5%" — CNBC, October 28, 2021`,
  `"Omicron Variant Sends Shockwaves Through Global Markets" — Reuters, December 2, 2021`,
  `"Robinhood Shares Plunge After Disappointing IPO" — Bloomberg, August 3, 2021`,
  `"NFT Market Hits Record $41 Billion in Sales in 2021" — CoinDesk, December 31, 2021`,
  `"U.S. Economy Surges 6.5% in Q2 as Stimulus Kicks In" — CNBC, July 30, 2021`,
  `"Bitcoin Crashes 30% After China Bans Crypto Mining" — CoinDesk, May 23, 2021`,
  `"Reddit’s WallStreetBets Sparks Revolution in Retail Trading" — The Guardian, January 29, 2021`,
  `"Cathie Wood Predicts Bitcoin Will Hit $500,000 By 2030" — Bloomberg, November 20, 2021`,
  `"Nasdaq Surges 8% in One Week, Analysts Fear Bubble Formation" — Reuters, August 12, 2021`,
  `"Gold Loses Shine as Crypto Becomes Preferred Inflation Hedge" — CNBC, December 18, 2021`,
  `"Amazon Expands Into Healthcare, Shares Spike 10%" — Bloomberg, February 5, 2021`,
  `"SPAC Mania Peaks, But Critics Warn of Incoming Collapse" — Reuters, April 9, 2021`,
  `"Hedge Funds Battle Retail Traders Over AMC, Market Turns Volatile" — CNBC, June 4, 2021`,

  // 2022
  `"Russia Invades Ukraine, Oil Prices Surge Past $130" — BBC News, February 24, 2022`,
  `"Gold Hits $2,000 as Investors Flee Risky Assets Amid Ukraine Crisis" — Bloomberg, March 10, 2022`,
  `"Dow Falls 1,000 Points After Hawkish Fed Speech" — CNBC, March 25, 2022`,
  `"Crypto Market Cap Drops Below $1 Trillion Amid Liquidations" — CoinTelegraph, June 14, 2022`,
  `"S&P 500 Enters Bear Market Territory After Steep Sell-Off" — The Wall Street Journal, June 13, 2022`,
  `"Tesla Announces Stock Split, Shares Jump 8%" — CNBC, August 5, 2022`,
  `"Ethereum Merge Sparks Optimism, ETH Surges 15%" — CoinDesk, September 15, 2022`,
  `"Mass Layoffs at Meta and Amazon Signal Tech Sector Decline" — CNBC, November 14, 2022`,
  `"U.S. Inflation Hits 40-Year High at 9.1%" — Bloomberg, July 13, 2022`,
  `"Bitcoin Falls Below $20,000 Amid Recession Fears" — CoinDesk, June 18, 2022`,
  `"SEC Cracks Down on Binance, Sparks Market Uncertainty" — Reuters, March 28, 2022`,
  `"Global Recession Looms as Inflation Squeezes Economies" — The New York Times, July 20, 2022`,
  `"Netflix Loses 1 Million Subscribers, Shares Fall 20%" — CNBC, July 19, 2022`,
  `"U.S. Job Market Surges Despite Rate Hikes, Dow Rallies" — Reuters, August 5, 2022`,
  `"OPEC Cuts Oil Output by 2 Million Barrels, Energy Stocks Surge" — Bloomberg, October 5, 2022`,
  `"Recession Fears Mount as Fed Signals Aggressive Tightening" — Reuters, September 21, 2022`,
  `"Crypto Winter Wipes Out $2 Trillion in Market Value" — CoinDesk, November 12, 2022`,
  `"AI Stocks Start To Dominate Tech Sector In 2022’s Second Half" — CNBC, December 20, 2022`,

  // 2023
  `"Fed’s Pivot Sparks Market Rebound, Nasdaq Rises 3%" — Bloomberg, January 6, 2023`,
  `"AI Stock Boom Sends Nvidia Shares Soaring 20%" — CNBC, May 25, 2023`,
  `"US Treasury Sanctions Tornado Cash, Citing Money Laundering" — Reuters, August 8, 2023`,
  `"Bitcoin Mining Hits New Record Despite Energy Concerns" — CoinDesk, September 15, 2023`,
  `"U.S. Debt Ceiling Crisis Looms, Markets on Edge" — The Wall Street Journal, January 19, 2023`,
  `"AI-Powered Chatbots Revolutionize Tech Stocks" — Bloomberg, March 10, 2023`,
  `"Crypto Lender Declares Bankruptcy, Market Panics" — CoinDesk, February 18, 2023`,
  `"Tesla Shares Drop 12% After Missing Revenue Expectations" — Reuters, April 5, 2023`,
  `"Meta Launches AI Glasses, Shares Rise 10%" — CNBC, June 2, 2023`,
  `"Global Recession Fears Intensify, Oil Prices Drop 15%" — Bloomberg, July 20, 2023`,
  `"Bitcoin Rallies 25% Amid ETF Approval Speculation" — CoinTelegraph, August 14, 2023`,
  `"Tech Layoffs Reach Record Highs Amid AI Investment Frenzy" — The Guardian, September 4, 2023`,
  `"Global Trade Slows as China’s Economy Falters" — Bloomberg, October 10, 2023`,
  `"U.S. Economy Shrinks Unexpectedly in Q2, Markets Wobble" — Reuters, July 28, 2023`,
  `"China’s Evergrande Files for Bankruptcy Protection, Markets React" — Bloomberg, August 18, 2023`,
  `"U.S.-China Relations Strain as Tariffs Resurface, Markets Dive" — Reuters, May 30, 2023`
];
let showHoverInstruction = true;
let previousHeadlineBrushActive = false; // Track the previous state

let currentBackgroundIndex = 0; // Start with the first word

let backgroundWordSpeed = 2; // Speed of background words
let lineModeHeadlineRate = 1; // Slower generation rate for line mode
let backgroundWordGenerationInterval = 500; // Time interval (ms) between word generation
let lastBackgroundWordGenerationTime = 0; // Last time a word was generated
let maxBackgroundWordPool = 1000; // Predefined list of background words
let headlineGenerationRate = 1.5; // Default rate: 1 headline per frame
const labels = [
  { name: "Amazon Share Price", min: 50, max: 200 },
  { name: "Apple Share Price", min: 100, max: 300 },
  { name: "Nvdia Share Price", min: 800, max: 1000 },
  { name: "Tesla Share Price", min: 200, max: 500 },
  { name: "Microsoft Share Price", min: 400, max: 600 },
  { name: "Meta Share Price", min: 600, max: 800 },
  { name: "Netflix Share Price", min: 400, max: 700 },
  { name: "Bitcoin Price", min: 50000, max: 60000 },
  { name: "Gold Price", min: 2000, max: 25000 },
  { name: "SP500 Price", min: 4000, max: 6000 },
  
];
let pressToPlayActive = true;
let priceVisible = false; // Flag for showing the price
let labelVisible = false; // Flag for showing the label
let lineVisible = false; // Flag for showing the line
let fadeStartTime = 0; // Track when fading starts
let fadeDuration = 1000; // Fade-in duration in milliseconds
let introEndTime = 0; // Track when the intro ends
let prevHeadlineY = 0; // Previous Y position of the headline brush ball
let headlineSpeedY = 0; // Vertical speed of the headline brush ball
let wordColors = [
"#FF1E61", "#FF0000", "#FF004B", "#FF0000",
  "#FF6C00", "#FF0000", "#FE4500", "#FF340F",
  "#FF5733", "#FF4500","#FF006C", "#FF0000", "#FE004B", "#FF0000",
  "#FF5733", "#FF0000"
]; // Red, orange, and yellow
let objects = []; // Array to store drawn objects (headlines)

let ballX = 100; // Initial X position of the ball
let ballY; // Y position of the ball
let targetY; // Target Y position for organic movement
let changeInterval = 500; // Interval for changing target Y
let lastChangeTime = 0; // Last time the target Y was updated
let speed = 1.3; // Speed of the ball moving to the right
let traces = []; // Array to store ball traces

let redGreenRatio = 1; // Initial ratio of red to green
let headlineBrushActive = false; // Whether we're in headline brush mode
let backgroundMusic; // Variable to hold the background music
let hoverMusic; // Variable to hold the hover music
let isMusic1Playing = false; // Flag to track the state of Music1.m4a

let prevBallY = 0; // Previous Y position of the ball
let ballSpeedY = 0; // Vertical speed of the ball
let introActive = true; // Whether the introduction is currently active


 let introTexts = [
  "The financial market's core nature is the interaction between humans. Every day, millions show up — each with their own ideas, opinions, and perspectives, all exchanged into the market.",
  "According to the data, 97% will lose money. Only a few will come out profitable.",
];
let currentIntroSlide = 0; // Track the current slide
let introSlideDuration = 10000; // Duration per slide (ms)
let introStartTime = 0; // Track when the intro started
let selectedLabel; // Object to hold the randomly selected label and range
let dynamicPrice; // Current dynamic price for the selected label

function preload() {
  backgroundMusic = loadSound("SSSS_1.mp3");
  hoverMusic = loadSound("Back_sounds_final.mp3");
}
function mousePressed() {
  userStartAudio();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballY = height / 2; // Start the ball at the center
  targetY = random(height); // Set an initial random target Y

  textFont("KumbhSans-Light");

  backgroundMusic.loop();
  backgroundMusic.setVolume(0.5); // Set the volume to 50%

  hoverMusic.loop();
  hoverMusic.setVolume(0.0); // Start with volume muted

  introStartTime = millis(); // Record the time when the intro starts

  selectedLabel = random(labels);
  dynamicPrice = random(selectedLabel.min, selectedLabel.max);
}

function draw() {
  if (pressToPlayActive) {
    displayPressToPlay(); // Show "Press to Play" screen
    return; // Exit draw function until the user presses the mouse
  }

  if (introActive) {
    displayIntro();
    let elapsedTime = millis() - introStartTime;
    if (elapsedTime > introSlideDuration) {
      introStartTime = millis(); // Reset the timer
      currentIntroSlide++; // Move to the next slide
      if (currentIntroSlide >= introTexts.length) {
        introActive = false; // End intro
      }
    }
    return; // Exit draw function until the intro is done
  }

  background(0, 100); // Slightly transparent background for trailing effect

  ballSpeedY = ballY - prevBallY;
  prevBallY = ballY;

  dynamicPrice = Math.round(map(ballY, height, 0, selectedLabel.min, selectedLabel.max));

  if (millis() - lastChangeTime > changeInterval) {
    targetY = random(height); 
    changeInterval = random(500, 1000); 
    lastChangeTime = millis();
  }

  ballY = lerp(ballY, targetY, 0.05);
  ballX += speed;

  // Track mode transitions for headlineBrushActive
  let wasHeadlineBrushActive = headlineBrushActive;
  headlineBrushActive = isMouseInLeftHalf();

  // Detect transitions into or out of headline brush mode
  if (headlineBrushActive !== wasHeadlineBrushActive) {
    // Change the label and price when switching modes
    selectedLabel = random(labels);
    dynamicPrice = Math.round(random(selectedLabel.min, selectedLabel.max));
  }

  // Show or hide the mouse cursor based on the mode
  if (headlineBrushActive) {
    noCursor(); // Hide cursor in headline brush mode
  } else {
    cursor(); // Show cursor in line mode
  }

  if (showHoverInstruction) {
    displayHoverInstruction();
  }

  generateHeadlinesInBackground();

  if (headlineBrushActive) {
    hoverMusic.setVolume(1.0);
    runHeadlineBrush();
    showHoverInstruction = false;
  } else {
    hoverMusic.setVolume(0.0);
    runBallLine();
    displayDynamicPrice();
  }
}


function mousePressed() {
  userStartAudio();
  //fullscreen(true); // Try enabling fullscreen again on first click

  if (pressToPlayActive) {
    pressToPlayActive = false;
    introActive = true;
    introStartTime = millis();
  }
}

function isMouseInLeftHalf() {
  return mouseX < width / 2;
}
function displayPressToPlay() {
  background(0); // Solid black background
  fill(200); // White text
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Press to play", width / 2, height / 2); // Display in the middle of the screen
}

function displayHoverInstruction() {
  fill(255, 100);
  textSize(10);
  textAlign(LEFT, CENTER);
  text("Hover over the graph to interact", mouseX + 15, mouseY);
}

function displayIntro() {
  background(0);
  let elapsedTime = millis() - introStartTime;
  let remainingTime = introSlideDuration - elapsedTime;
  let opacity = 255;
  if (elapsedTime < fadeDuration) {
    opacity = map(elapsedTime, 0, fadeDuration, 0, 255);
  } else if (remainingTime < fadeDuration) {
    opacity = map(remainingTime, 0, fadeDuration, 0, 255);
  }

  fill(255, opacity);
  textSize(15);
  textAlign(CENTER, CENTER);
  textWrap(WORD);
  let padding = 150;
  let textBoxWidth = width - 2 * padding;
  text(introTexts[currentIntroSlide], padding, height / 2 - 50, textBoxWidth);
}

function runBallLine() {
  traces.push({ x: ballX, y: ballY });

  stroke(255);
  noFill();
  beginShape();
  for (let i = 0; i < traces.length; i++) {
    vertex(traces[i].x - ballX + width / 2, traces[i].y);
  }
  endShape();

  if (traces.length > 1000) {
    traces.shift();
  }

  fill(255);
  noStroke();
  ellipse(width / 2, ballY, 10, 10);
}

function displayDynamicPrice() {
  fill(255);

  const roundedPrice = Math.round(dynamicPrice);

  textSize(300);
  textAlign(RIGHT, BOTTOM);
  text(`${roundedPrice}`, width - 10, height - 30);

  textSize(20);
  text(selectedLabel.name, width - 15, height - 40);
}

function runHeadlineBrush() {
  headlineSpeedY = ballY - prevHeadlineY;
  prevHeadlineY = ballY;

  generateBackgroundWords();
  drawBackgroundWords();

  for (let i = 0; i < headlineGenerationRate; i++) {
    let randomHeadline = random(headlines);
    let randomFontSize = getRandomFontSize();
    let randomColor = random(wordColors); // Randomly pick red, orange, or yellow

    let x = ballX + random(-120, 20);
    let y = ballY + random(-120, 20);

    objects.push({
      x: x,
      y: y,
      fontSize: randomFontSize,
      color: randomColor,
      text: wrapText(randomHeadline, 25),
    });
  }

  for (let obj of objects) {
    let x = obj.x - ballX + width / 2;
    if (x > -200 && x < width + 200) {
      fill(obj.color);
      textSize(obj.fontSize);
      text(obj.text, x, obj.y);
    }
  }

  objects = objects.filter((obj) => obj.x - ballX > -1000);
}

function generateHeadlinesInBackground() {
  if (random(1) < lineModeHeadlineRate) {
    let randomHeadline = random(headlines);
    let randomFontSize = getRandomFontSize();
    let randomColor = random(wordColors);

    let x = ballX + random(-80, 20);
    let y = ballY + random(-80, 20);

    objects.push({
      x: x,
      y: y,
      fontSize: randomFontSize,
      color: randomColor,
      text: wrapText(randomHeadline, 25),
    });
  }

  objects = objects.filter((obj) => obj.x - ballX > -1000);
}

function generateBackgroundWords() {
  if (
    millis() - lastBackgroundWordGenerationTime > backgroundWordGenerationInterval &&
    backgroundWords.length < maxBackgroundWordPool
  ) {
    let word = backgroundWordList[currentBackgroundIndex];
    let size = random(5, 17);
    let y = random(height);
    let alpha = random(10, 175);
    backgroundWords.push({
      word: word,
      x: width + random(50, 200),
      y: y,
      size: size,
      alpha: alpha,
      speed: backgroundWordSpeed + random(-1, 1),
    });

    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundWordList.length;

    lastBackgroundWordGenerationTime = millis();
  }

  backgroundWords = backgroundWords.filter((word) => word.x > -200);
}

function drawBackgroundWords() {
  for (let word of backgroundWords) {
    word.x -= word.speed;

    fill(255, word.alpha);
    textSize(word.size);
    textAlign(CENTER, CENTER);
    text(word.word, word.x, word.y);
  }
}

function getRandomFontSize() {
  let sizes = [2, 4, 5, 6, 7, 15];
  let probabilities = [0.4, 0.3, 0.2, 0.05, 0.03, 0.01];

  let r = random(1);
  let cumulativeProbability = 0;

  for (let i = 0; i < sizes.length; i++) {
    cumulativeProbability += probabilities[i];
    if (r <= cumulativeProbability) {
      return sizes[i];
    }
  }
  return sizes[sizes.length - 1];
}

function wrapText(txt, maxCharsPerLine) {
  let words = txt.split(" ");
  let lines = "";
  let currentLine = "";

  for (let word of words) {
    let testLine = currentLine + word + " ";
    if (testLine.length > maxCharsPerLine) {
      lines += currentLine + "\n";
      currentLine = word + " ";
    } else {
      currentLine = testLine;
    }
  }

  lines += currentLine;
  return lines;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
