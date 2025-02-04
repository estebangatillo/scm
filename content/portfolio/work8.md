---
date: "2024-02-05T19:59:22+05:30"
draft: true
image: ""
showonlyimage: false
title: Portland Alternative Therapy Map
weight: 7
---

# Portland Alternative Therapy Network Map


library(pacman)
p_load(tidyverse, ggmap, leaflet, readr, sf, htmlwidgets, googlesheets4)

sheet_url <- "https://docs.google.com/spreadsheets/d/1BXvZrboy0PuWrDN4auxZoBsLrG9f1ONtd2-UhzMLPlw/edit?usp=sharing"
data <- read_sheet(sheet_url)


# get the data...
# pat_add <- read_csv("data/alt_therapy_database.csv")

# convert to spatial object
pat_sf <- st_as_sf(data, coords = c("lon", "lat"))
  
# Create a popup
pat_pop <- paste0(
  "<b>Name of Practice: </b>", pat_sf$`name of practice`, "<br>",
  "<b>Address: </b>", pat_sf$address, "<br>",
  "<b>Phone: </b>", pat_sf$`phone number`, "<br>",
  "<b>Website: </b>", pat_sf$website
)
  
m <- leaflet() %>% 
  addTiles() %>% 
  addCircleMarkers( # this will change how fire stations are represented on our map
    data = pat_sf,
    radius = 10, # Circe size
    color = 'darkgreen', # Line color
    fillColor = 'lightgreen', 
    weight = 1, # Thickness of the line
    fillOpacity = 0.9, # how transparent the fire stations are (between 0 and 1)
    popup = pat_pop) # This creates informational "popup" for our fire stations. It is pulled from the layer attributes.

m
