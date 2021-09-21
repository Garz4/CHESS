#!/

# Need for 7 deadly sins.
pride = 0
greed = 0
lust = 0
envy = 0
gluttony = 0
wrath = 0
sloth = 0

# Need for 7 human virtues.
humility = 0
charity = 0
chastity = 0
gratitude = 0
temperance = 0
patience = 0
diligence = 0

# We need a way to constantly update these values.
# 
# There is no 'pride' when 'humilty' is present,
# there is no 'greed' when 'charity' is present,
# and so on and so forth.
# 
# But, there is no 'chastity' when 'lust' is present,
# there is no 'gratitude' when 'envy' is present,
# and so on and so forth.
# 
# Each human action have all these values in place.
# If we choose 'humility', then the need for being humble should decrease
# and the need for 'pride' should increase.
#
# For some weird reason, some people don't care much about the actual values
# that some specific vices and its counterparts need.
#
# When either a vice or a virtue need surpasses a specific value, the
# person should execute some other action in order for it to be fulfilled.
def updateVices(action):
    print(action)
