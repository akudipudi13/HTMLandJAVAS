import pytest

from caseChecker import caseCheck


@pytest.mark.parametrize("string, expected", [
    ("hello", "lowerCase"),
    ("hElLo", "mixedCase"),
    ("HELLO", "upperCase"),
    ("heLLo", "mixedCase"),
    ("hellO", "mixedCase"),
    ("Hello World", "mixedCase"),
    (" ", "enter string! ")
    
])
def test_caseCheck(string, expected):
    assert caseCheck(string) == expected

if __name__ == "__main__":
    print("Running pytest test cases...\n")
    pytest.main([__file__])