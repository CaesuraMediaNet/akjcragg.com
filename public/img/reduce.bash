#  for i in `ls *jpg`; do echo $i; ./reduce.bash $i;done
#
mkdir -p blur
echo "Convert $1 to $1.300x300.jpg"
convert -resize 300x300 $1 $1.300x300.jpg
echo "Creating blur/$1.300x300.jpg"
jpegoptim -S 5 -s -d blur $1.300x300.jpg
echo "Tidy"
mv blur/$1.300x300.jpg blur/$1 
rm  $1.300x300.jpg
echo "See blur/$1";
