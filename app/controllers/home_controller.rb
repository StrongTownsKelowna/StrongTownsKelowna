class HomeController < ApplicationController
  def index
    @campaigns = [
      { title: "Safe & Productive Streets", description: "We seek to shift the priority of local streets from automobile throughput to human safety and wealth creation.", img: "wealth-creation.jpg" },
      { title: "Mix-use Development", description: "We seek to have the next increment of development intensity allowed, by right, in every neighborhood in Kelowna.", img: "mix-use.jpg" },
      { title: "End Parking Mandates & Subsidies", description: "We seek an end to the mandates and subsidies that cause productive land to be used for motor vehicle storage.", img: "empty-parking-lot.jpg" },
      { title: "Transparent Local Accounting", description: "We seek to reveal the financial implications of the Suburban Experiment by increasing the transparency of local government accounting practices.", img: "city-hall.jpg" },
      { title: "End Highway Expansion", description: "We seek to curtail the primary mechanism of local wealth destruction and municipal insolvency: the continued expansion of British Columbia's highways and related auto-based transportation systems.", img: "highway-expansion.jpg" }
    ]
    @articles = [
      { title: "The Suburban Expirement", author: "John smith", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
      { title: "Parking Minimums", author: "Jane Doe", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
    ]
  end
end
