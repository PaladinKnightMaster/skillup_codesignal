# import pandas as pd
# from datasets import load_dataset
# import matplotlib.pyplot as plt
# import seaborn as sns

# # Load the SMS Spam Collection dataset
# sms_spam = load_dataset('codesignal/sms-spam-collection')

# # Convert to pandas DataFrame for convenient handling
# df = pd.DataFrame(sms_spam['train'])

# # TODO: Fix the code to display the countplot correctly
# plt.figure(figsize=(8, 4))
# sns.countplot(x='label', data=df)
# plt.title('Frequency of Spam vs Ham Messages')
# # There's something missing here that's necessary to display the plot.

import pandas as pd
from datasets import load_dataset
import matplotlib.pyplot as plt
import seaborn as sns

# Load the SMS Spam Collection dataset
sms_spam = load_dataset('codesignal/sms-spam-collection')

# Convert to pandas DataFrame for convenient handling
df = pd.DataFrame(sms_spam['train'])

# TODO: Fix the code to display the countplot correctly
plt.figure(figsize=(8, 4))
sns.countplot(x='label', data=df)
plt.title('Frequency of Spam vs Ham Messages')
# There's something missing here that's necessary to display the plot.
plt.show()