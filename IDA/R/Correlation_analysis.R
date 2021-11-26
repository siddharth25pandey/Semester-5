head(mtcars, 6)

# remove vs and am variables
library(tidyverse)
dat <- mtcars %>%
  select(-vs, -am)

# display 6 first obs. of new dataset
head(dat, 6)

cor(dat$mpg, dat$wt)
cor(dat$mpg, dat$wt, method="spearman")

round(cor(dat),digits=1)

# scatterplot
library(ggplot2)

ggplot(dat) +
  aes(x = hp, y = mpg) +
  geom_point(colour = "#0c4c8a") +
  theme_minimal()

plot(dat$wt, dat$disp)

pairs(dat[, c(1,4,6)])

library(corrplot)
corrplot(cor(dat))

corrplot(cor(dat),
         method = "number",
         type = "upper" # show only upper side
)

cor.test(dat$hp, dat$wt, method="pearson")


