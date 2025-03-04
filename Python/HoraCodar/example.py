
import sys

def main(args):
    print("Arguments passed to the script:")
    for arg in args:
        print(arg)

if __name__ == "__main__":
    main(sys.argv[1:])
