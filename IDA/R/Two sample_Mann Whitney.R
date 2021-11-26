if(!require(psych)){install.packages("psych")}
if(!require(FSA)){install.packages("FSA")}
if(!require(lattice)){install.packages("lattice")}
if(!require(rcompanion)){install.packages("rcompanion")}
if(!require(coin)){install.packages("coin")}
if(!require(DescTools)){install.packages("DescTools")}
if(!require(effsize)){install.packages("effsize")}


Input =("
 Cartoon  Likert
 Pooh      3 
 Pooh      5
 Pooh      4
 Pooh      4
 Pooh      4
 Pooh      4 
 Pooh      4
 Pooh      4
 Pooh      5
 Pooh      5
 Piglet    2
 Piglet    4
 Piglet    2
 Piglet    2
 Piglet    1
 Piglet    2
 Piglet    3
 Piglet    2
 Piglet    2
 Piglet    3
")

Data = read.table(textConnection(Input),header=TRUE)
str(Data)

### Create a new variable which is the likert scores as an ordered factor

Data$Likert.f = factor(Data$Likert,ordered = TRUE)

###  Check the data frame

library(psych)

str(Data)
summary(Data)

# Summarize data treating Likert scores as factors
# Note that the variable we want to count is Likert.f, 
# which is a factor variable.  Counts for Likert.f are cross tabulated over 
# values of Cartoon.  The prop.table function translates a table into 
# proportions.  The margin=1 option indicates that the proportions are calculated for each row.

xtabs( ~ Cartoon + Likert.f,data = Data)

XT = xtabs( ~ Cartoon + Likert.f,data = Data)
prop.table(XT,margin = 1)

library(lattice)

histogram(~ Likert.f | Cartoon,data=Data,layout=c(1,2)     
          #  columns and rows of individual plots
)

barplot(XT,   
        col="dark gray", 
        xlab="Cartoon",
        ylab="Frequency")

library(FSA)
Summarize(Likert ~ Cartoon,                                                     
          data=Data, 
          digits=3)

wilcox.test(Likert ~ Cartoon, data=Data)

wilcox.test(Likert ~ Cartoon, data=Data, 
            exact = F, paired = F,
            conf.int = TRUE,
            conf.level = 0.95)



