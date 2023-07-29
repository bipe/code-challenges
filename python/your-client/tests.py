from unittest import TestCase
from solution import autocorrect
TestCase.maxDiff = None

class TestSampleTests(TestCase):
    def test_provided_examples(self):
        """ provided examples """
        self.assertEqual(
            autocorrect("We have sent the deliverables to you."),
            "We have sent the deliverables to your client."
        )
        self.assertEqual(
            autocorrect("Our team is excited to finish this with you."),
            "Our team is excited to finish this with your client."
        )
        self.assertEqual(
            autocorrect("youtube"),
            "youtube"
        )
