// Rasterizes SVG files to PNG at a fixed pixel size with macOS's own SVG renderer (NSImage).
// Used by scripts/build-email-images.mjs; macOS only.
//
//   swift scripts/rasterize-svg.swift <width> <height> <in.svg> <out.png> [<in.svg> <out.png> ...]

import AppKit

let args = CommandLine.arguments
guard args.count >= 5, (args.count - 3) % 2 == 0, let w = Int(args[1]), let h = Int(args[2]) else {
  FileHandle.standardError.write("usage: rasterize-svg.swift <width> <height> <in.svg> <out.png> ...\n".data(using: .utf8)!)
  exit(2)
}
var i = 3
while i < args.count {
  let input = URL(fileURLWithPath: args[i]), output = URL(fileURLWithPath: args[i + 1])
  i += 2
  guard let image = NSImage(contentsOf: input) else {
    FileHandle.standardError.write("cannot read \(input.path)\n".data(using: .utf8)!)
    exit(1)
  }
  let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: w, pixelsHigh: h, bitsPerSample: 8, samplesPerPixel: 4,
                             hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
  rep.size = NSSize(width: w, height: h)
  NSGraphicsContext.saveGraphicsState()
  NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)
  NSGraphicsContext.current?.imageInterpolation = .high
  image.draw(in: NSRect(x: 0, y: 0, width: w, height: h))
  NSGraphicsContext.restoreGraphicsState()
  try! rep.representation(using: .png, properties: [:])!.write(to: output)
}
