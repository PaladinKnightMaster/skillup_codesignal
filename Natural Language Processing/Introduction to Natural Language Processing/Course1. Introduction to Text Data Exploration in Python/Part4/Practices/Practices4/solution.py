# import pandas as pd
# from datasets import load_dataset
# import matplotlib.pyplot as plt
# import seaborn as sns

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # TODO: Create a visualization using seaborn to show the count of different labels (spam vs ham) in the dataset
# # Make sure to adjust the figure size for better visibility and add an appropriate title to the plot

import pandas as pd
from datasets import load_dataset
import matplotlib.pyplot as plt
import seaborn as sns

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# TODO: Create a visualization using seaborn to show the count of different labels (spam vs ham) in the dataset
# Make sure to adjust the figure size for better visibility and add an appropriate title to the plot
plt.figure(figsize=(8, 4))
sns.countplot(x='label', data=df)
plt.title('Frequency of Spam vs Ham Messages')
plt.show()