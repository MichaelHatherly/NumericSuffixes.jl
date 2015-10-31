<!-- Generated by Docile.jl -->

# NumericSuffixes

[![Build Status](https://travis-ci.org/MichaelHatherly/NumericSuffixes.jl.svg?branch=master)](https://travis-ci.org/MichaelHatherly/NumericSuffixes.jl) [![Build status](https://ci.appveyor.com/api/projects/status/o0e0nau6yonqoi4d?svg=true)](https://ci.appveyor.com/project/MichaelHatherly/numericsuffixes-jl) [![Coverage Status](http://codecov.io/github/MichaelHatherly/NumericSuffixes.jl/coverage.svg?branch=master)](http://codecov.io/github/MichaelHatherly/NumericSuffixes.jl?branch=master) [![NumericSuffixes](http://pkg.julialang.org/badges/NumericSuffixes_0.4.svg)](http://pkg.julialang.org/?pkg=NumericSuffixes)

<a name="Main.NumericSuffixes"></a>

```
NumericSuffixes
```

Provides macro `@suffix` for generating shorthand numeric conversion suffixes.

**Examples**

```julia
x = 1i8        # Convert `1` to `Int8`.
y = 3u32       # Convert `3` to `UInt32`.
z = (x + y)r16 # Convert `4` to `Float16`.
```

**Default Suffixes**

16 suffixes are provided by default:

  * `i8   --> Int8`
  * `i16  --> Int16`
  * `i32  --> Int32`
  * `i64  --> Int64`
  * `i128 --> Int128`
  * `u8   --> UInt8`
  * `u16  --> UInt16`
  * `u32  --> UInt32`
  * `u64  --> UInt64`
  * `u128 --> UInt128`
  * `r16  --> Float16`
  * `r32  --> Float32`
  * `r64  --> Float64`
  * `c32  --> Complex32`
  * `c64  --> Complex64`
  * `c128 --> Complex128`

Additional user defined suffixes can be made using the `@suffix` macro.

<hr/>

<a name="NumericSuffixes.@suffix"></a>

```
@suffix n T
```

Generate a new numeric suffix named `n` which converts numbers to type `T`.

**Examples**

```julia
@suffix i8 Int8

x = 1i8
typeof(x) == Int8
```

More complex conversions can be made using anonymous function syntax:

```julia
@suffix t16 x -> trunc(Int16, x)

x = 1.2t16
typeof(x) == Int16
```
