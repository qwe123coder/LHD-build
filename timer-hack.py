import threading
import time


class TimerClass(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self)
        self.event = threading.Event()

    def run(self):
        while not self.event.is_set():
            print "do something"
            self.event.wait(1)

    def stop(self):
        self.event.set()


timer = TimerClass()
timer.start()

time.sleep(10)

timer.stop()
