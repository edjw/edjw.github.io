---
title: Square numbers in Sacred Harp song numbers
date: 2018-06-10 00:00:00 +0000
layout: post
---
A singer at the [Sacred Harp singing in Durham](https://durhamsacredharp.co.uk/) yesterday was calling only [square numbers](https://en.wikipedia.org/wiki/Square_number).

I went and made a list of those numbers.

<table>
<tr>
<th style="padding-right: 2rem;">Square root</th>
<th>Song number</th>
</tr>
<tr>
<td>6</td>
<td>36t</td>
</tr>
<tr>
<td>6</td>
<td>36b</td>
</tr>
<tr>
<td>7</td>
<td>49t</td>
</tr>
<tr>
<td>7</td>
<td>49b</td>
</tr>
<tr>
<td>8</td>
<td>64</td>
</tr>
<tr>
<td>9</td>
<td>81t</td>
</tr>
<tr>
<td>9</td>
<td>81b</td>
</tr>
<tr>
<td>10</td>
<td>100</td>
</tr>
<tr>
<td>11</td>
<td>121<br></td>
</tr>
<tr>
<td>12</td>
<td>144</td>
</tr>
<tr>
<td>13</td>
<td>169</td>
</tr>
<tr>
<td>14</td>
<td>196</td>
</tr>
<tr>
<td>15</td>
<td>225t</td>
</tr>
<tr>
<td>15</td>
<td>225b</td>
</tr>
<tr>
<td>17</td>
<td>289</td>
</tr>
<tr>
<td>18</td>
<td>324</td>
</tr>
<tr>
<td>19</td>
<td>361</td>
</tr>
<tr>
<td>20</td>
<td>400</td>
</tr>
<tr>
<td>21</td>
<td>441</td>
</tr>
<tr>
<td>22</td>
<td>484</td>
</tr>
</table>

And the Python code I used to find this…

<pre class="js-scrollable">

    import math
    
    # All song numbers with the t (top) or b (bottom) taken off
    song_numbers = [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 191, 192, 193, 195, 196, 197, 198, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 220, 222, 223, 224, 225, 227, 228, 229, 230, 231, 232, 234, 235, 236, 240, 242, 245, 250, 254, 260, 263, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 306, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 358, 359, 360, 361, 362, 365, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 510, 511, 512, 513, 515, 516, 517, 518, 521, 522, 523, 524, 527, 528, 530, 531, 532, 534, 535, 536, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 553, 556, 558, 560, 562, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573]
    
    square_numbers = []
    
    for number in song_numbers:
    
        # find the square root of the song number
        square_root = math.sqrt(number)
    
        # if the sqrt of the song number is an integer
        if int(square_root) == square_root:
    
            # add the song number to the list of square numbers
            square_numbers.append(number)
    
    print(square_numbers)
    # 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 289, 324, 361, 400, 441, 484
    
    # 36t, 36b, 49t, 49b, 64, 81t, 81b, 100, 121, 144, 169, 196, 225t, 225b, 289, 324, 361, 400, 441, 484

</pre>
