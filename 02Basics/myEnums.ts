enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
// Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.

enum Direction2 {
  Up,
  Down,
  Left,
  Right,
}

//     Here, Up would have the value 0, Down would have 1, etc. This auto-incrementing behavior is useful for cases where we might not care about the member values themselves, but do care that each value is distinct from other values in the same enum.

// Using an enum is simple: just access any member as a property off of the enum itself, and declare types using the name of the enum:

enum userResponse {
  No = 0,
  Yes = 1,
}

function respond(rescipient: string, message: userResponse): void {}

respond("gaurav", userResponse.Yes);

export {};
