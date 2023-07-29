import builtins
import unittest
from find_variable_assignments import find_variable_assignments

class TestFindVariableAssignments(unittest.TestCase):
    def test_regular_assignment(self):
        src = """
def fn():
    str = 42
    a, b = 1, 2
    print(str, a, b)
"""
        expected = ["str"]
        targets = dir(builtins)
        self.assertCountEqual(find_variable_assignments(src, targets), expected)
        
    def test_ignores_edge_cases(self):
        src = """
def fn():
    "str = 42"
    '''next=42'''
    'bin = dir = next = list'
    next == 42
    a, b = str, list
    print(str, a, b)
"""
        expected = []
        targets = dir(builtins)
        self.assertCountEqual(find_variable_assignments(src, targets), expected)
        
    def test_ignores_values(self):
        src = """
def fn():
    next = 42
    str = next
    a, b = tuple, list
"""
        expected = ["next", "str"]
        targets = dir(builtins)
        self.assertCountEqual(find_variable_assignments(src, targets), expected)
        
    def test_multiple_assignments(self):
        src = """
def fn(): 
    next,dir,list,dir = 1,2,3,"bin = 4"
str = 45
"""
        expected = ["next", "str", "dir", "list"]
        targets = dir(builtins)
        self.assertCountEqual(find_variable_assignments(src, targets), expected)
        
    def test_single_parameter(self):
        src = "def reverse(str): return str[::-1]"
        expected = ["str"]
        targets = dir(builtins)
        self.assertCountEqual(find_variable_assignments(src, targets), expected)
        
    def test_multiple_parameters(self):
        src = """
def list(str, foo, iter): 
    def bin(set): 
        dict = 42 
        foo = zip
        bar = 0
    return str[::-1]
"""
        expected = ["str", "list", "iter", "bin", "set", "dict"]
        targets = dir(builtins)
        self.assertCountEqual(find_variable_assignments(src, targets), expected)
        
    def test_class_with_nested_fn(self):
        src = """
class str: 
    def __init__(self, list): 
        def next(foo, iter=42, baz=1): bin = 2
"""
        expected = ["str", "list", "next", "iter", "bin"]
        targets = dir(builtins)
        self.assertCountEqual(find_variable_assignments(src, targets), expected)
        