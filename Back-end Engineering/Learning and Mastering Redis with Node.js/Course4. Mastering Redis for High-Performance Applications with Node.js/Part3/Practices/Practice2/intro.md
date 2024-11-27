# Change Redis Channel to News

Currently, our setup listens to the `notifications` channel. Let's change it to listen to a different channel, `news`, and publish a different message:` "Breaking News!"`. Remember to update the unsubscribe call as well and stop listening to the `news` channel instead.

Update the code to achieve this.