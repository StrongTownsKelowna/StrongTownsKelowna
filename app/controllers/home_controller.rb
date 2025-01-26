class HomeController < ApplicationController
  def index
    @campaigns = [
      { title: "Safe & Productive Streets", description: "Streets aren’t for sitting in traffic, and more roads will only add to the problem. Traffic congestion and road safety can only be fixed by shifting the priority of local streets from automobile throughput to human safety and wealth creation.", img: "wealth-creation.webp" },
      { title: "Mix-use Development", description: "Neighbourhoods where people can live, work, shop and play increase our connection to our communities. Shockingly these mixed-use neighbourhoods are illegal to build in the vast majority of Kelowna. We seek to have the next increment of development intensity allowed, by right, in every neighborhood in Kelowna.", img: "mix-use.webp" },
      { title: "End Parking Mandates & Subsidies", description: "We seek an end to the mandates and subsidies that cause productive land to be used for motor vehicle storage.", img: "empty-parking-lot.webp" },
      { title: "Transparent Local Accounting", description: "We seek to reveal the financial implications of the Suburban Experiment by increasing the transparency of local government accounting practices.", img: "city-hall.webp" },
      { title: "End Highway Expansion", description: "Giant highways divide our city and cut us off from one another - and traffic is as bad as it’s ever been! We seek to curtail the primary mechanism of local wealth destruction and municipal insolvency: the continued expansion of motorways and related auto-based transportation systems. And advocate for actual solutions in their place (transit, biking etc)!", img: "highway-expansion.webp" }
    ]
    @articles = Article.all()
    start_date = params.fetch(:start_date, Date.today).to_date
    @events = Event.where(start_time: start_date.beginning_of_month.beginning_of_week..start_date.end_of_month.end_of_week)
  end
end
