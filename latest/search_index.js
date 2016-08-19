var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#NumericSuffixes-1",
    "page": "Home",
    "title": "NumericSuffixes",
    "category": "section",
    "text": "Shorthand numeric conversions."
},

{
    "location": "index.html#Contents-1",
    "page": "Home",
    "title": "Contents",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "This package is registered in METADATA.jl and so can be installed using Pkg.addPkg.add(\"NumericSuffixes\")"
},

{
    "location": "index.html#NumericSuffixes",
    "page": "Home",
    "title": "NumericSuffixes",
    "category": "Module",
    "text": "Provides the @suffix macro for generating shorthand numeric conversion suffixes.\n\nExamples\n\nx = 1i8        # Convert `1` to `Int8`.\ny = 3u32       # Convert `3` to `UInt32`.\nz = (x + y)r16 # Convert `4` to `Float16`.\n\nDefault Suffixes\n\n16 suffixes are provided by default:\n\ni8   --> Int8\ni16  --> Int16\ni32  --> Int32\ni64  --> Int64\ni128 --> Int128\nu8   --> UInt8\nu16  --> UInt16\nu32  --> UInt32\nu64  --> UInt64\nu128 --> UInt128\nr16  --> Float16\nr32  --> Float32\nr64  --> Float64\nc32  --> Complex32\nc64  --> Complex64\nc128 --> Complex128\n\nAdditional user defined suffixes can be made using the @suffix macro.\n\n\n\n"
},

{
    "location": "index.html#NumericSuffixes.@suffix",
    "page": "Home",
    "title": "NumericSuffixes.@suffix",
    "category": "Macro",
    "text": "Generate a new numeric suffix named n which converts numbers to type T.\n\nSignature\n\n@suffix n T\n\nExamples\n\n@suffix i8 Int8\n\nx = 1i8\ntypeof(x) == Int8\n\nMore complex conversions can be made using anonymous function syntax:\n\n@suffix t16 x -> trunc(Int16, x)\n\nx = 1.2t16\ntypeof(x) == Int16\n\n\n\n"
},

{
    "location": "index.html#Public-Interface-1",
    "page": "Home",
    "title": "Public Interface",
    "category": "section",
    "text": "NumericSuffixes\n@suffix"
},

{
    "location": "index.html#Default-Suffixes-1",
    "page": "Home",
    "title": "Default Suffixes",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#NumericSuffixes.i8",
    "page": "Home",
    "title": "NumericSuffixes.i8",
    "category": "Type",
    "text": "Numeric suffix for Int8 values.\n\n\n\n"
},

{
    "location": "index.html#NumericSuffixes.i16",
    "page": "Home",
    "title": "NumericSuffixes.i16",
    "category": "Type",
    "text": "Numeric suffix for Int16 values.\n\n\n\n"
},

{
    "location": "index.html#NumericSuffixes.i32",
    "page": "Home",
    "title": "NumericSuffixes.i32",
    "category": "Type",
    "text": "Numeric suffix for Int32 values.\n\n\n\n"
},

{
    "location": "index.html#NumericSuffixes.i64",
    "page": "Home",
    "title": "NumericSuffixes.i64",
    "category": "Type",
    "text": "Numeric suffix for Int64 values.\n\n\n\n"
},

{
    "location": "index.html#NumericSuffixes.i128",
    "page": "Home",
    "title": "NumericSuffixes.i128",
    "category": "Type",
    "text": "Numeric suffix for Int128 values.\n\n\n\n"
},

{
    "location": "index.html#Signed-Integers-1",
    "page": "Home",
    "title": "Signed Integers",
    "category": "section",
    "text": "i8\ni16\ni32\ni64\ni128"
},

{
    "location": "index.html#NumericSuffixes.u8",
    "page": "Home",
    "title": "NumericSuffixes.u8",
    "category": "Type",
    "text": "Numeric suffix for UInt8 values.\n\n\n\n"
},

{
    "location": "index.html#NumericSuffixes.u16",
    "page": "Home",
    "title": "NumericSuffixes.u16",
    "category": "Type",
    "text": "Numeric suffix for UInt16 values.\n\n\n\n"
},

{
    "location": "index.html#NumericSuffixes.u32",
    "page": "Home",
    "title": "NumericSuffixes.u32",
    "category": "Type",
    "text": "Numeric suffix for UInt32 values.\n\n\n\n"
},

{
    "location": "index.html#NumericSuffixes.u64",
    "page": "Home",
    "title": "NumericSuffixes.u64",
    "category": "Type",
    "text": "Numeric suffix for UInt64 values.\n\n\n\n"
},

{
    "location": "index.html#NumericSuffixes.u128",
    "page": "Home",
    "title": "NumericSuffixes.u128",
    "category": "Type",
    "text": "Numeric suffix for UInt128 values.\n\n\n\n"
},

{
    "location": "index.html#Unsigned-Integers-1",
    "page": "Home",
    "title": "Unsigned Integers",
    "category": "section",
    "text": "u8\nu16\nu32\nu64\nu128"
},

{
    "location": "index.html#NumericSuffixes.r16",
    "page": "Home",
    "title": "NumericSuffixes.r16",
    "category": "Type",
    "text": "Numeric suffix for Float16 values.\n\n\n\n"
},

{
    "location": "index.html#NumericSuffixes.r32",
    "page": "Home",
    "title": "NumericSuffixes.r32",
    "category": "Type",
    "text": "Numeric suffix for Float32 values.\n\n\n\n"
},

{
    "location": "index.html#NumericSuffixes.r64",
    "page": "Home",
    "title": "NumericSuffixes.r64",
    "category": "Type",
    "text": "Numeric suffix for Float64 values.\n\n\n\n"
},

{
    "location": "index.html#Floating-Point-Numbers-1",
    "page": "Home",
    "title": "Floating Point Numbers",
    "category": "section",
    "text": "r16\nr32\nr64"
},

{
    "location": "index.html#NumericSuffixes.c32",
    "page": "Home",
    "title": "NumericSuffixes.c32",
    "category": "Type",
    "text": "Numeric suffix for Complex{Float16} values.\n\n\n\n"
},

{
    "location": "index.html#NumericSuffixes.c64",
    "page": "Home",
    "title": "NumericSuffixes.c64",
    "category": "Type",
    "text": "Numeric suffix for Complex{Float32} values.\n\n\n\n"
},

{
    "location": "index.html#NumericSuffixes.c128",
    "page": "Home",
    "title": "NumericSuffixes.c128",
    "category": "Type",
    "text": "Numeric suffix for Complex{Float64} values.\n\n\n\n"
},

{
    "location": "index.html#Complex-Floating-Point-Numbers-1",
    "page": "Home",
    "title": "Complex Floating Point Numbers",
    "category": "section",
    "text": "c32\nc64\nc128"
},

]}
