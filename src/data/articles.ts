import imgSurfing from "@/assets/articles/surfing.jpg";
import imgTechProductivity from "@/assets/articles/tech-productivity.jpg";
import imgExerciseLanguage from "@/assets/articles/exercise-language.jpg";
import imgWeddingCatering from "@/assets/articles/wedding-catering.jpg";
import imgFootballChampionship from "@/assets/articles/football-championship.jpg";
import imgEclipse from "@/assets/articles/eclipse.jpg";
import imgMuseum from "@/assets/articles/museum.jpg";
import imgFashionInfluential from "@/assets/articles/fashion-influential.jpg";
import imgDesignerShoes from "@/assets/articles/designer-shoes.jpg";
import imgFashionStyle from "@/assets/articles/fashion-style.jpg";
import imgFashionMyths from "@/assets/articles/fashion-myths.jpg";
import imgEducationPolicy from "@/assets/articles/education-policy.jpg";
import imgCollegeFootball from "@/assets/articles/college-football.jpg";
import imgEconomyGrowth from "@/assets/articles/economy-growth.jpg";
import imgSymphonyHall from "@/assets/articles/symphony-hall.jpg";
import imgTennisTournament from "@/assets/articles/tennis-tournament.jpg";
import imgCityCouncil from "@/assets/articles/city-council.jpg";
import imgChickenWaffles from "@/assets/articles/chicken-waffles.jpg";
import imgVegetablesCooking from "@/assets/articles/vegetables-cooking.jpg";
import imgCreamedCornShrimp from "@/assets/articles/creamed-corn-shrimp.jpg";
import imgFoodTv from "@/assets/articles/food-tv.jpg";
import imgWeeknightChicken from "@/assets/articles/weeknight-chicken.jpg";
import imgFamilyDevelopment from "@/assets/articles/family-development.jpg";
import imgResearchBias from "@/assets/articles/research-bias.jpg";
import imgDesignerBag from "@/assets/articles/designer-bag.jpg";
import imgStarPlayer from "@/assets/articles/star-player.jpg";
import imgBaseball from "@/assets/articles/baseball.jpg";
import imgRockClimbing from "@/assets/articles/rock-climbing.jpg";
import imgSubway from "@/assets/articles/subway.jpg";
import imgHealthyEating from "@/assets/articles/healthy-eating.jpg";
import imgKitchenFear from "@/assets/articles/kitchen-fear.jpg";
import imgFineDining from "@/assets/articles/fine-dining.jpg";
import imgRoutineChanges from "@/assets/articles/routine-changes.jpg";
import imgAirTravel from "@/assets/articles/air-travel.jpg";
import imgRareBooks from "@/assets/articles/rare-books.jpg";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  subcategory?: string;
  author: string;
  date: string;
  image: string;
  likes?: number;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Longform Guide to Surfing: Great Stories About Big Waves",
    excerpt: "Every weekend, Longform shares a collection of great stories from its archive. Big waves, unlikely champions, and the 'dark prince of the beach'—our favorite stories about surfers.",
    category: "Sports",
    author: "Editorial Staff",
    date: "April 27, 2017",
    image: imgSurfing,
    likes: 18,
  },
  {
    id: "2",
    title: "How to be as Productive as a Tech Company Employee",
    excerpt: "Silicon Valley's top workers share their secrets to staying productive in a fast-paced environment where innovation never sleeps.",
    category: "Technology",
    subcategory: "Lifestyle",
    author: "Editorial Staff",
    date: "May 10, 2017",
    image: imgTechProductivity,
    likes: 11,
  },
  {
    id: "3",
    title: "How Exercise Could Help You Learn a New Language",
    excerpt: "Researchers have found that physical activity performed during a language lesson can improve your ability to memorize new vocabulary.",
    category: "Health",
    author: "Editorial Staff",
    date: "May 11, 2017",
    image: imgExerciseLanguage,
    likes: 12,
  },
  {
    id: "4",
    title: "Get the Best Catering for Your Summer Wedding in Metro City",
    excerpt: "Planning a summer wedding? Our guide covers the top catering companies in the metropolitan area to make your big day unforgettable.",
    category: "Lifestyle",
    subcategory: "Main",
    author: "Editorial Staff",
    date: "May 13, 2017",
    image: imgWeddingCatering,
    likes: 11,
  },
  {
    id: "5",
    title: "City FC Tops Regional Team in First Leg of Championship Playoff",
    excerpt: "In a thrilling match that kept fans on the edge of their seats, City FC secured a narrow victory over the visiting regional squad.",
    category: "Sports",
    author: "Editorial Staff",
    date: "May 15, 2017",
    image: imgFootballChampionship,
    likes: 14,
  },
  {
    id: "6",
    title: "Why Some Say the Eclipse Is Best Experienced in a Crowd",
    excerpt: "Astronomers and enthusiasts alike argue that the rare celestial event is best enjoyed as a communal experience.",
    category: "Science",
    author: "Editorial Staff",
    date: "May 18, 2017",
    image: imgEclipse,
    likes: 14,
  },
  {
    id: "7",
    title: "The Most Fascinating Show? The Museum Trying to Fix Itself",
    excerpt: "A major museum undergoes a controversial renovation that has critics and patrons debating the future of cultural institutions.",
    category: "Arts",
    subcategory: "Politics",
    author: "Editorial Staff",
    date: "May 23, 2017",
    image: imgMuseum,
    likes: 13,
  },
  {
    id: "8",
    title: "The Most Influential People in the Winter Fashion Industry",
    excerpt: "From designers to influencers, meet the people shaping what we'll all be wearing when the temperature drops.",
    category: "Fashion",
    author: "Amy Adams",
    date: "May 24, 2017",
    image: imgFashionInfluential,
    likes: 9,
  },
  {
    id: "9",
    title: "Designer Claire Stone on the Importance of Comfortable Shoes",
    excerpt: "The celebrated designer shares why comfort should never be sacrificed for style and how her latest collection bridges both.",
    category: "Fashion",
    author: "Amy Adams",
    date: "May 01, 2017",
    image: imgDesignerShoes,
    likes: 15,
  },
  {
    id: "10",
    title: "The 13 Best Inspiration Sources for Learning About Fashion & Style",
    excerpt: "Whether you're a budding designer or style enthusiast, these resources will transform your approach to fashion.",
    category: "Fashion",
    author: "Alice Bohn",
    date: "May 07, 2017",
    image: imgFashionStyle,
    likes: 10,
  },
  {
    id: "11",
    title: "Why the Biggest 'Myths' About Fashion May Actually Be Right",
    excerpt: "Conventional wisdom in the fashion industry is often dismissed, but new research suggests some old adages hold true.",
    category: "Fashion",
    author: "Thomas Williams",
    date: "May 06, 2017",
    image: imgFashionMyths,
    likes: 8,
  },
  {
    id: "12",
    title: "Controversial Education Policy Sparks Debate in State Legislature",
    excerpt: "Lawmakers are divided over a new education proposal that could fundamentally change how schools are funded and operated.",
    category: "Politics",
    author: "Thomas Williams",
    date: "July 15, 2017",
    image: imgEducationPolicy,
    likes: 22,
  },
  {
    id: "13",
    title: "The Best College Football Team You've Probably Never Heard Of",
    excerpt: "Tucked away in a small town, this underdog team has been quietly dominating their division for three consecutive seasons.",
    category: "Sports",
    author: "Editorial Staff",
    date: "June 28, 2017",
    image: imgCollegeFootball,
    likes: 16,
  },
  {
    id: "14",
    title: "Nation's Economy Grows Again, in Longest Streak in 11 Years",
    excerpt: "Economic indicators point to sustained growth as consumer confidence reaches multi-year highs across key sectors.",
    category: "Economy",
    author: "Alice Bohn",
    date: "August 12, 2017",
    image: imgEconomyGrowth,
    likes: 19,
  },
  {
    id: "15",
    title: "A Weekend Can Span Centuries at Symphony Hall",
    excerpt: "The concert series traverses musical eras from baroque to contemporary, offering audiences a journey through time.",
    category: "Arts",
    author: "Editorial Staff",
    date: "September 02, 2017",
    image: imgSymphonyHall,
    likes: 7,
  },
  {
    id: "16",
    title: "Major Tennis Tournament 2017 Latest: Women's Semi-final Results",
    excerpt: "An unexpected upset in the semi-finals has rewritten the tournament narrative as a newcomer advances to the championship.",
    category: "Sports",
    author: "Alice Bohn",
    date: "September 10, 2017",
    image: imgTennisTournament,
    likes: 20,
  },
  {
    id: "17",
    title: "City Council Vote to Drop Historical References",
    excerpt: "In a controversial decision, the city council voted to remove certain historical references from public buildings and parks.",
    category: "Politics",
    author: "Thomas Williams",
    date: "September 15, 2017",
    image: imgCityCouncil,
    likes: 25,
  },
  {
    id: "18",
    title: "Menu – Metro City's Home of Chicken and Waffles",
    excerpt: "This beloved restaurant has been serving its signature dish for over two decades, earning a loyal following across the city.",
    category: "Food",
    subcategory: "Dinner",
    author: "Editorial Staff",
    date: "August 03, 2017",
    image: imgChickenWaffles,
    likes: 13,
  },
  {
    id: "19",
    title: "When to Cook Your Vegetables Long Past 'Done'",
    excerpt: "Forget al dente — sometimes the best flavors emerge when you let your vegetables cook far longer than tradition dictates.",
    category: "Food",
    subcategory: "Dinner",
    author: "Editorial Staff",
    date: "August 06, 2017",
    image: imgVegetablesCooking,
    likes: 9,
  },
  {
    id: "20",
    title: "Want to Make Creamed Corn Into a Meal? Add Shrimp",
    excerpt: "This simple addition transforms a humble side dish into a satisfying main course perfect for weeknight cooking.",
    category: "Food",
    subcategory: "Dinner",
    author: "Editorial Staff",
    date: "August 24, 2017",
    image: imgCreamedCornShrimp,
    likes: 11,
  },
  {
    id: "21",
    title: "Fresh Food on TV: Weekend Edition",
    excerpt: "Our roundup of the best food programming to watch this weekend, from competitive cooking to travel-inspired cuisine.",
    category: "Food",
    subcategory: "Snacks",
    author: "Editorial Staff",
    date: "August 09, 2017",
    image: imgFoodTv,
    likes: 6,
  },
  {
    id: "22",
    title: "A Quick, Satisfying Fix for Weeknight Chicken",
    excerpt: "When time is short and hunger is high, this five-ingredient chicken recipe delivers maximum flavor with minimum effort.",
    category: "Food",
    subcategory: "Breakfast",
    author: "Editorial Staff",
    date: "August 13, 2017",
    image: imgWeeknightChicken,
    likes: 14,
  },
  {
    id: "23",
    title: "The Impact of Family Structure on Child Development",
    excerpt: "New longitudinal studies reveal how diverse family configurations influence cognitive and emotional growth in children.",
    category: "Politics",
    subcategory: "Family",
    author: "Editorial Staff",
    date: "September 06, 2017",
    image: imgFamilyDevelopment,
    likes: 17,
  },
  {
    id: "24",
    title: "Research Bias Starts Early and Takes a Serious Toll",
    excerpt: "Systemic issues in academic research methodology are compounding over time, leading to flawed conclusions across disciplines.",
    category: "Science",
    author: "Editorial Staff",
    date: "September 20, 2017",
    image: imgResearchBias,
    likes: 21,
  },
  {
    id: "25",
    title: "A Designer Bag That's Worth a Lifetime of Savings",
    excerpt: "Fashion experts weigh in on the investment pieces that truly hold their value and why quality trumps quantity.",
    category: "Technology",
    subcategory: "Lifestyle",
    author: "Editorial Staff",
    date: "June 22, 2017",
    image: imgDesignerBag,
    likes: 8,
  },
  {
    id: "26",
    title: "Local Team's Star Player Says He'll Be Ready for Opener",
    excerpt: "After months of rehabilitation following knee surgery, the star striker has declared himself fit for the season opener.",
    category: "Sports",
    author: "Editorial Staff",
    date: "August 28, 2017",
    image: imgStarPlayer,
    likes: 12,
  },
  {
    id: "27",
    title: "Baseball Team May Get a Breather, but Challenge Awaits",
    excerpt: "After a grueling series, the team faces a brief respite before confronting the division leaders in a crucial matchup.",
    category: "Sports",
    author: "Editorial Staff",
    date: "September 05, 2017",
    image: imgBaseball,
    likes: 10,
  },
  {
    id: "28",
    title: "Physiological Responses to Rock Climbing in Young Climbers",
    excerpt: "A study examining how adolescent bodies adapt to the physical demands of competitive rock climbing reveals surprising findings.",
    category: "Science",
    subcategory: "Health",
    author: "Editorial Staff",
    date: "May 23, 2017",
    image: imgRockClimbing,
    likes: 7,
  },
  {
    id: "29",
    title: "Which Metro City Subway Pass to Buy?",
    excerpt: "Navigating the city's transit system can be confusing. Here's our definitive guide to choosing the right pass for your commute.",
    category: "Science",
    author: "Editorial Staff",
    date: "May 18, 2017",
    image: imgSubway,
    likes: 5,
  },
  {
    id: "30",
    title: "Why Healthy Eating Doesn't Mean Dieting",
    excerpt: "Nutritionists are shifting the conversation from restrictive dieting to sustainable, enjoyable eating habits.",
    category: "Food",
    subcategory: "Breakfast",
    author: "Editorial Staff",
    date: "August 18, 2017",
    image: imgHealthyEating,
    likes: 16,
  },
  {
    id: "31",
    title: "Overcoming Your Fear Of The Kitchen",
    excerpt: "For those intimidated by cooking, these simple strategies will help you build confidence and find joy in preparing meals.",
    category: "Food",
    subcategory: "Baking",
    author: "Editorial Staff",
    date: "August 22, 2017",
    image: imgKitchenFear,
    likes: 12,
  },
  {
    id: "32",
    title: "Culinary Trends: What's Next in Fine Dining",
    excerpt: "From fermentation to foraging, the world's top chefs are reimagining what it means to eat well in the modern era.",
    category: "Food",
    author: "Editorial Staff",
    date: "September 22, 2017",
    image: imgFineDining,
    likes: 15,
  },
  {
    id: "33",
    title: "It Began with Sudden Changes in Routine",
    excerpt: "A personal essay exploring how small disruptions in daily life can signal larger transformations on the horizon.",
    category: "Lifestyle",
    author: "Editorial Staff",
    date: "September 18, 2017",
    image: imgRoutineChanges,
    likes: 9,
  },
  {
    id: "34",
    title: "How to Find Better Deals on Air Travel",
    excerpt: "Travel experts share their insider tips for finding affordable flights without sacrificing comfort or convenience.",
    category: "Travel",
    author: "Editorial Staff",
    date: "September 12, 2017",
    image: imgAirTravel,
    likes: 20,
  },
  {
    id: "35",
    title: "Rare Book Conservation: A Delicate Dance of Preservation",
    excerpt: "Inside the meticulous world of rare book restoration, where every page turn is a calculated risk and preservation is an art form.",
    category: "Arts",
    author: "Editorial Staff",
    date: "October 01, 2017",
    image: imgRareBooks,
    likes: 11,
  },
];

export const getArticlesByCategory = (category: string) =>
  articles.filter((a) => a.category.toLowerCase() === category.toLowerCase());

export const getArticleById = (id: string) => articles.find((a) => a.id === id);
