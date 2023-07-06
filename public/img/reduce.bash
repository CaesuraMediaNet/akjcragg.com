mkdir -p blur
convert -resize 300x300 $1 $1.300x300.jpg
jpegoptim -S 5 -s -d blur $1.300x300.jpg
mv blur/$1.300x300.jpg blur/$1 
rm  $1.300x300.jpg
echo "See blur/$1";
